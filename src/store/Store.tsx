import React from 'react';
import { Provider } from 'react-redux';
import { StoreConfig } from './StoreConfig';

type Props = {
  children: React.ReactNode;
};

const Store = ({ children }: Props): JSX.Element => {
  return <Provider store={StoreConfig}>{children}</Provider>;
};

export default Store;
