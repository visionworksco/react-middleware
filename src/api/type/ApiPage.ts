import { ApiPageSizeLimit } from './ApiPageSizeLimit';

export interface ApiPage {
  pageSizeLimit: ApiPageSizeLimit;
  collectionSize: number;
  pageSize?: number;
  totalPages: number;
  firstPage: number;
  lastPage: number;
  currentPage: number;
  nextPage?: number | null;
  previousPage?: number | null;

  getSkipCount(): number;
  isPartialContent(): boolean;
}
