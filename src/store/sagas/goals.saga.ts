import { put, takeEvery, select } from 'redux-saga/effects';
import { format } from 'date-fns';

import goalsActions, { changeGoals } from '../actions/goals.actions';
import { IReducerState } from '../rootReducer';
import { storeGoal, listGoalsStored } from '../../utils/storageFunctions';
import routesConstants from '../../utils/routesConstants';
import { history } from '../index';
import Goal from '../../models/Goal';

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

function* asyncListGoals() {
  const goals = listGoalsStored();
  yield put(changeGoals({ goals }));
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* goalsSaga() {
  yield takeEvery(goalsActions.ASYNC_CREATE_GOAL, asyncCreateGoal);
  yield takeEvery(goalsActions.ASYNC_LIST_GOALS, asyncListGoals);
}
