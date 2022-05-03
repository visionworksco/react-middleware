import { ApiPage } from './ApiPage';

export interface ApiPageableResponse<T, E> {
  data: T[];
  paginator: ApiPage;
  error?: E;
  status: number;
}
