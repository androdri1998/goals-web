import React, { Suspense, lazy } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import routesConstants from '../utils/routesConstants';

const Home = lazy(() => import('../pages/Home'));
const AddGoal = lazy(() => import('../pages/AddGoal'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<>Carregando...</>}>
      <BrowserRouter>
        <Switch>
          <Route path={routesConstants.HOME} exact component={Home} />
          <Route path={routesConstants.ADD_GOAL} exact component={AddGoal} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
