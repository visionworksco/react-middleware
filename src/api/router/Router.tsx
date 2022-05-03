import React from 'react';
import { BrowserRouter } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const Router = (props: Props): JSX.Element => {
  const { children } = props;
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default Router;
