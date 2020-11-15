/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import appReducer, { IAppState } from './reducers/app.reducer';

export interface IReducerState {
  appReducer: IAppState;
}

const reducer = (history: History<any>): any =>
  combineReducers({
    router: connectRouter(history),
    appReducer,
  });

export default reducer;
