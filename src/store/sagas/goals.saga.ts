import { put, takeEvery, select } from 'redux-saga/effects';
import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

import goalsActions, {
  changeGoals,
  changeGoal,
} from '../actions/goals.actions';
import { IReducerState } from '../rootReducer';
import {
  storeGoal,
  listGoalsStored,
  listGoalStoredById,
  upadateGoals,
} from '../../utils/storageFunctions';
import routesConstants from '../../utils/routesConstants';
import { history } from '../index';
import Goal, { IDeposit } from '../../models/Goal';

interface IAsyncAddGoalDTO {
  type: string;
  payload: { title: string; value: number; whenReach: Date };
}

function* asyncCreateGoal({
  payload: { whenReach, value, title },
}: IAsyncAddGoalDTO) {
  const whenReachString = format(whenReach, 'yyyy-MM-dd HH:mm:ss');
  const goal = new Goal(title, value, whenReachString);

  const goalsRedux = yield select(
    (state: IReducerState) => state.goalsReducer.goals,
  );

  storeGoal({ goal });

  const newGoals = [goal, ...goalsRedux];

  yield put(changeGoals({ goals: newGoals }));

  history.push(routesConstants.FEEDBACK_ADD_GOAL);
}

interface IAsyncRemoveGoalDTO {
  type: string;
  payload: { goalId: string };
}

function* asyncRemoveGoal({ payload: { goalId } }: IAsyncRemoveGoalDTO) {
  const goalsRedux = yield select(
    (state: IReducerState) => state.goalsReducer.goals,
  );

  const newGoals = goalsRedux.filter((goal: Goal) => goal.id !== goalId);

  upadateGoals({ goals: newGoals });

  yield put(changeGoals({ goals: newGoals }));

  history.push(routesConstants.HOME);
}

interface IAsyncAddDepositDTO {
  type: string;
  payload: { description: string; value: number; goalId: string };
}

function* asyncCreateDeposit({
  payload: { goalId, value, description },
}: IAsyncAddDepositDTO) {
  const createdAt = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  const deposit = { id: uuidv4(), value: value * 100, description, createdAt };

  const goalStored = listGoalStoredById({ id: goalId }) as Goal;
  const currentDeposits = goalStored ? goalStored.deposits : [];

  const newDeposits: IDeposit[] = [deposit, ...currentDeposits];
  goalStored.deposits = newDeposits;

  const goals = listGoalsStored();

  const goalFoundIndex = goals.findIndex((goal: Goal) => goal.id === goalId);

  goals[goalFoundIndex] = goalStored;

  upadateGoals({ goals });

  yield put(changeGoals({ goals }));
  yield put(changeGoal({ goal: goalStored }));
  history.push(routesConstants.FEEDBACK_ADD_DEPOSIT);
}

function* asyncListGoals() {
  const goals = listGoalsStored();
  yield put(changeGoals({ goals }));
}

interface IAsyncListGoalDTO {
  type: string;
  payload: {
    goalId: string;
  };
}

function* asyncListGoal({ payload: { goalId } }: IAsyncListGoalDTO) {
  const goal = listGoalStoredById({ id: goalId });
  yield put(changeGoal({ goal: goal || null }));
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* goalsSaga() {
  yield takeEvery(goalsActions.ASYNC_CREATE_GOAL, asyncCreateGoal);
  yield takeEvery(goalsActions.ASYNC_CREATE_DEPOSIT, asyncCreateDeposit);
  yield takeEvery(goalsActions.ASYNC_LIST_GOALS, asyncListGoals);
  yield takeEvery(goalsActions.ASYNC_LIST_GOAL, asyncListGoal);
  yield takeEvery(goalsActions.ASYNC_DELETE_GOAL, asyncRemoveGoal);
}
