import { ApiLoad } from "@/store/modules/data/types";
import React, { useEffect, useState } from "react";

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

  return (
    <section data-testid="test-pagination">
      <button>{pages?.prev}</button>
      <button>{pages?.current}</button>
      <button>{pages?.next}</button>
    </section>
  );
}

export default Pagination;
