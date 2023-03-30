import { apiGet } from "@/pages/api/api";
import {
  displayFoundResults,
  fetchFromAPI,
} from "@/store/modules/data/actions";
import { ApiLoad } from "@/store/modules/data/types";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PaginationButton from "./PaginationButton";

type PaginationType = {
  data: ApiLoad;
};

export function matchNextPages(data: ApiLoad) {
  const info = data?.info;
  const regex = /page=(\d+)/;
  const nextPage = Number(info?.next?.split(regex)[1]);
  const prevPage = Number(info?.prev?.split(regex)[1]);

  return {
    current: nextPage - 1 || null,
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
      displayFoundResults
    );
  };

  return (
    <section data-testid="test-pagination">
      <PaginationButton
        handlePageChange={handlePageChange}
        pageNumber={pages?.prev}
        testid={"test-prev-button"}
        url={data?.info?.prev as string}
      />
      <button>{pages?.current}</button>
      <PaginationButton
        handlePageChange={handlePageChange}
        pageNumber={pages?.next}
        testid={"test-next-button"}
        url={data?.info?.next as string}
      />
    </section>
  );
}

export default Pagination;
