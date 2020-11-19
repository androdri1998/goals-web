/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import goalsReducer, { IGoalsState } from './reducers/goals.reducer';

export interface IReducerState {
  goalsReducer: IGoalsState;
}

const reducer = (history: History<any>): any =>
  combineReducers({
    router: connectRouter(history),
    goalsReducer,
  });

export default reducer;
