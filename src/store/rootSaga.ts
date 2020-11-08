import { all } from 'redux-saga/effects';

import appSaga from './sagas/app.saga';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* rootSaga() {
  return yield all([appSaga()]);
}
