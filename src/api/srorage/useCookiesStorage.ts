import { useCookies } from 'react-cookie';

type ReturnProps = {
  find: () => string | undefined;
  save: (value: string) => void;
  remove: () => void;
};

export const useCookiesStorage = (id: string, domain = 'localhost'): ReturnProps => {
  const [cookies, setCookie, removeCookie] = useCookies([id]);

  const DEFAULT_OPTIONS = {
    domain,
    path: '/',
  };

  const find = (): string | undefined => {
    return cookies[id];
  };

  const save = (value: string): void => {
    setCookie(id, value, DEFAULT_OPTIONS);
  };

  const remove = (): void => {
    removeCookie(id, DEFAULT_OPTIONS);
  };

  return {
    find,
    save,
    remove,
  };
};
