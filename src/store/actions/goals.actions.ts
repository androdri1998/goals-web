import Goal from '../../models/Goal';

interface IGoalsActions {
  ASYNC_CREATE_GOAL: string;
  ASYNC_LIST_GOALS: string;
  CHANGE_GOALS: string;
}

const goalsActions = {
  ASYNC_CREATE_GOAL: '@goals/ASYNC_CREATE_GOAL',
  ASYNC_LIST_GOALS: '@goals/ASYNC_LIST_GOALS',
  CHANGE_GOALS: '@goals/CHANGE_GOALS',
} as IGoalsActions;

interface IAsyncAddGoalResponse {
  type: string;
  payload: {
    title: string;
    value: number;
    whenReach: Date;
  };
}

interface IAsyncAddGoalDTO {
  title: string;
  value: number;
  whenReach: Date;
}

export const asyncAddGoal = ({
  title,
  value,
  whenReach,
}: IAsyncAddGoalDTO): IAsyncAddGoalResponse => ({
  type: goalsActions.ASYNC_CREATE_GOAL,
  payload: { title, value, whenReach },
});

interface IAsyncListGoalsResponse {
  type: string;
}

export const asyncListGoals = (): IAsyncListGoalsResponse => ({
  type: goalsActions.ASYNC_LIST_GOALS,
});

interface IChangeGoalsResponse {
  type: string;
  payload: {
    goals: Goal[];
  };
}

interface IChangeGoalsDTO {
  goals: Goal[];
}

export const changeGoals = ({
  goals,
}: IChangeGoalsDTO): IChangeGoalsResponse => ({
  type: goalsActions.CHANGE_GOALS,
  payload: { goals },
});

export default goalsActions;
