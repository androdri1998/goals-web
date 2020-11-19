import { all } from 'redux-saga/effects';

import goalsSaga from './sagas/goals.saga';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* rootSaga() {
  return yield all([goalsSaga()]);
}
