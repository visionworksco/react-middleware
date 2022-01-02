import { ApiError } from '../../api/type/ApiError';

export interface ReducerAction<K, T> {
  type: K;
  payload?: T | ApiError;
}
