import { ApiAuthHeader } from './type/ApiAuthHeader';

const getAuthHeader = (token?: string): ApiAuthHeader | null => {
  return token ? { Authorization: `Bearer ${token}` } : null;
};

export const ApiUtils = {
  getAuthHeader,
};
