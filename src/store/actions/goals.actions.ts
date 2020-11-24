import Goal from '../../models/Goal';

interface IGoalsActions {
  ASYNC_CREATE_GOAL: string;
  ASYNC_CREATE_DEPOSIT: string;
  ASYNC_LIST_GOALS: string;
  CHANGE_GOALS: string;
  ASYNC_LIST_GOAL: string;
  CHANGE_GOAL: string;
}

const goalsActions = {
  ASYNC_CREATE_GOAL: '@goals/ASYNC_CREATE_GOAL',
  ASYNC_CREATE_DEPOSIT: '@goals/ASYNC_CREATE_DEPOSIT',
  ASYNC_LIST_GOALS: '@goals/ASYNC_LIST_GOALS',
  CHANGE_GOALS: '@goals/CHANGE_GOALS',
  ASYNC_LIST_GOAL: '@goals/ASYNC_LIST_GOAL',
  CHANGE_GOAL: '@goals/CHANGE_GOAL',
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

interface IAsyncAddDepositResponse {
  type: string;
  payload: {
    goalId: string;
    description: string;
    value: number;
  };
}

interface IAsyncAddDepositDTO {
  goalId: string;
  description: string;
  value: number;
}

export const asyncAddDeposit = ({
  description,
  value,
  goalId,
}: IAsyncAddDepositDTO): IAsyncAddDepositResponse => ({
  type: goalsActions.ASYNC_CREATE_DEPOSIT,
  payload: { description, value, goalId },
});

interface IAsyncListGoalsResponse {
  type: string;
}

export const asyncListGoals = (): IAsyncListGoalsResponse => ({
  type: goalsActions.ASYNC_LIST_GOALS,
});

interface IAsyncListGoalDTO {
  goalId: string;
}
interface IAsyncListGoalResponse {
  type: string;
  payload: { goalId: string };
}

export const asyncListGoal = ({
  goalId,
}: IAsyncListGoalDTO): IAsyncListGoalResponse => ({
  type: goalsActions.ASYNC_LIST_GOAL,
  payload: { goalId },
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
interface IChangeGoalResponse {
  type: string;
  payload: {
    goal: Goal | null;
  };
}

interface IChangeGoalDTO {
  goal: Goal | null;
}

export const changeGoal = ({ goal }: IChangeGoalDTO): IChangeGoalResponse => ({
  type: goalsActions.CHANGE_GOAL,
  payload: { goal },
});

export default goalsActions;
