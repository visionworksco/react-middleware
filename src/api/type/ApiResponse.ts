export interface ApiResponse<T, E> {
  data?: T;
  error?: E;
  status: number;
}
