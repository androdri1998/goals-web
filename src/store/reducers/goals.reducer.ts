/* eslint-disable @typescript-eslint/no-explicit-any */
import goalsActions from '../actions/goals.actions';
import Goal from '../../models/Goal';

export interface IGoalsState {
  goals: Goal[];
}

const initialState: IGoalsState = {
  goals: [],
};

interface IActionDTO {
  type: string;
  payload: any;
}

const goalsReducer = (
  state = initialState,
  action: IActionDTO,
): IGoalsState => {
  switch (action.type) {
    case goalsActions.CHANGE_GOALS:
      return { ...state, goals: action.payload.goals };
    default:
      return state;
  }
};

export default goalsReducer;
