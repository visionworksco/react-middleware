import { ApiError } from '../../http/types/ApiError';

export interface ReducerAction<K, T> {
  type: K;
  payload?: T | ApiError;
}
