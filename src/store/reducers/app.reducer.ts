/* eslint-disable @typescript-eslint/no-explicit-any */
import appActions from '../actions/app.actions';

export interface IAppState {
  example: string;
}

const initialState: IAppState = {
  example: '',
};

interface IActionDTO {
  type: string;
  payload: any;
}

const appReducer = (state = initialState, action: IActionDTO): IAppState => {
  switch (action.type) {
    case appActions.CHANGE_EXAMPLE:
      return { ...state, example: action.payload };
    default:
      return state;
  }
};

export default appReducer;
