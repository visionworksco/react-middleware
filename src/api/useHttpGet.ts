import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { ApiGetException } from './type/ApiGetException';

const http = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

interface ReturnProps<T> {
  loading: boolean;
  data: T[];
  error: Error | null;
  onRefresh: () => Promise<void>;
}

export const useHttpGet = <T>(endpoint: string): ReturnProps<T> => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const httpGet = useCallback(async (endpoint: string): Promise<void> => {
    try {
      if (endpoint.length === 0) {
        return;
      }

      setLoading(true);

      const response = await http.get<T[]>(endpoint);
      const { data, status } = response;

      if (status !== 200) {
        setError(new ApiGetException());
        setLoading(false);
        return;
      }

      setData(data);
      setLoading(false);
    } catch (error) {
      setError(new ApiGetException());
      setLoading(false);
    }
  }, []);

  // request
  useEffect(() => {
    httpGet(endpoint);
  }, [endpoint, httpGet]);

  const onRefresh = async (): Promise<void> => {
    await httpGet(endpoint);
  };

  return {
    loading,
    data,
    error,
    onRefresh,
  };
};
