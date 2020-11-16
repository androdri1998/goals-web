import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import routesConstants from '../utils/routesConstants';

const Home = lazy(() => import('../pages/Home'));
const AddGoal = lazy(() => import('../pages/AddGoal'));
const FeedbackAddGoal = lazy(() => import('../pages/FeedbackAddGoal'));
const AddDeposit = lazy(() => import('../pages/AddDeposit'));
const FeedbackAddDeposit = lazy(() => import('../pages/FeedbackAddDeposit'));
const GoalDetails = lazy(() => import('../pages/GoalDetails'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<>Carregando...</>}>
      <Switch>
        <Route path={routesConstants.HOME} exact component={Home} />
        <Route path={routesConstants.ADD_GOAL} exact component={AddGoal} />
        <Route
          path={routesConstants.FEEDBACK_ADD_GOAL}
          exact
          component={FeedbackAddGoal}
        />
        <Route
          path={routesConstants.ADD_DEPOSIT}
          exact
          component={AddDeposit}
        />
        <Route
          path={routesConstants.FEEDBACK_ADD_DEPOSIT}
          exact
          component={FeedbackAddDeposit}
        />
        <Route
          path={routesConstants.GOAL_DETAILS}
          exact
          component={GoalDetails}
        />
      </Switch>
    </Suspense>
  );
};

export default Routes;
