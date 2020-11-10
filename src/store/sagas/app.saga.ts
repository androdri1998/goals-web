import { put, takeEvery } from 'redux-saga/effects';

import appActions, { changeExampleAction } from '../actions/app.actions';

function* AsyncExample({ payload }: { type: string; payload: string }) {
  yield put(changeExampleAction(payload));
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* appSaga() {
  yield takeEvery(appActions.ASYNC_EXAMPLE, AsyncExample);
}
