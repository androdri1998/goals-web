/* eslint-disable @typescript-eslint/no-explicit-any */
import goalsActions from '../actions/goals.actions';
import Goal from '../../models/Goal';

export interface IGoalsState {
  goals: Goal[];
  goal: Goal | null;
}

const initialState: IGoalsState = {
  goals: [],
  goal: null,
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
    case goalsActions.CHANGE_GOAL:
      return { ...state, goal: action.payload.goal };
    default:
      return state;
  }
};

export default goalsReducer;
