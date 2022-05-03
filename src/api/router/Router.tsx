import React from 'react';
import { BrowserRouter } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

export const Router = (props: Props): JSX.Element => {
  const { children } = props;
  return <BrowserRouter>{children}</BrowserRouter>;
};
