import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PositionPage from '../pages/PositionPage';
import { RoutePath } from './RoutePath';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path={RoutePath.position} component={PositionPage} />
    </Switch>
  );
};

export default Routes;
