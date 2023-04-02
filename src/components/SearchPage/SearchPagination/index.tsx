import { apiGet } from "@/pages/api/api";
import { loadFoundResults, fetchFromAPI } from "@/store/modules/data/actions";
import { ApiLoad } from "@/store/modules/data/types";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PaginationButton from "./PaginationButton";
import {
  PaginationComponent,
  PaginationCurrentButtonComponent,
} from "./styles";

type PaginationType = {
  data: ApiLoad;
};

export function matchNextPages(data: ApiLoad) {
  const info = data?.info;
  const regex = /page=(\d+)/;
  const nextPage = Number(info?.next?.split(regex)[1]);
  const prevPage = Number(info?.prev?.split(regex)[1]);

  return {
    current: nextPage - 1 || prevPage + 1 || 0,
    prev: prevPage || null,
    next: nextPage || null,
  };
}

function Pagination({ data }: PaginationType) {
  const dispatch = useDispatch();

  const [pages, setPages] = useState<{
    current: number | null;
    prev: number | null;
    next: number | null;
  }>(() => {
    return {
      current: null,
      prev: null,
      next: null,
    };
  });

  useEffect(() => {
    setPages(matchNextPages(data));
  }, [data]);

  const handlePageChange = async (url: string) => {
    await apiGet(
      dispatch,
      fetchFromAPI(url.split("/").pop() as string),
      loadFoundResults
    );
  };

  return (
    <PaginationComponent data-testid="test-pagination">
      {data?.info?.prev && (
        <PaginationButton
          handlePageChange={handlePageChange}
          pageNumber={pages?.prev}
          testid={"test-prev-button"}
          url={data?.info?.prev as string}
        />
      )}
      {pages?.current !== 0 && (
        <PaginationCurrentButtonComponent>
          {pages?.current}
        </PaginationCurrentButtonComponent>
      )}
      {data?.info?.next && (
        <PaginationButton
          handlePageChange={handlePageChange}
          pageNumber={pages?.next}
          testid={"test-next-button"}
          url={data?.info?.next as string}
        />
      )}
    </PaginationComponent>
  );
}

export default Pagination;
