import { ApiAuthHeader } from './types/ApiAuthHeader';

const getAuthHeader = (token?: string): ApiAuthHeader | null => {
  return token ? { Authorization: `Bearer ${token}` } : null;
};

export const HttpUtils = {
  getAuthHeader,
};
