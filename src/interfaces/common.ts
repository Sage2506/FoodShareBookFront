export interface IPagination {
  arrows?: any,
  currentPage?: number,
  endIndex?: number,
  endPage?: number,
  pages: number[],
  pageSize: number,
  startIndex?: number,
  startPage?: number,
  totalItems?: number,
  totalPages?: number,
}