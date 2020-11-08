import React, { Suspense, lazy } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import routesConstants from '../utils/routesConstants';

const Home = lazy(() => import('../pages/Home'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<>Carregando...</>}>
      <BrowserRouter>
        <Switch>
          <Route path={routesConstants.HOME} exact component={Home} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
