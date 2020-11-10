import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import appReducer, { IAppState } from './reducers/app.reducer';

export interface IReducerState {
  appReducer: IAppState;
}

const reducer = combineReducers({
  route: routerReducer,
  appReducer,
});

export default reducer;
