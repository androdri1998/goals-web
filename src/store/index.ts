import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history))),
);

sagaMiddleware.run(rootSaga);

export default store;
