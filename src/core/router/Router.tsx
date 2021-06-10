import React, { FunctionComponent } from 'react';
import { Redirect, Router as DomRouter, Switch } from 'react-router-dom';
import { LINK } from '../../Constants';
import Home from '../../pages/home/Home';
import { useAuth0 } from '../auth/Auth0Config';
import AuthBarrier from '../auth/AuthBarrier';
import Shell from '../shell/Shell';
import history from './History';
import PrivateRoute from './PrivateRoute';

const Router: FunctionComponent = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <DomRouter history={history}>
      <Switch>
        <AuthBarrier>
          <Shell>
            <Switch>
              <PrivateRoute key={LINK.HOME.key} path={LINK.HOME.path} exact component={Home} isAllowed />
              {isAuthenticated && <Redirect to="/home" />}
            </Switch>
          </Shell>
        </AuthBarrier>
      </Switch>
    </DomRouter>
  );
};

export default Router;
