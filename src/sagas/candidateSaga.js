import { call, put, takeEvery } from 'redux-saga/effects';
import { postFormData } from '../api/httpClient';
import {
  postCandidateAction,
  resetCandidate,
} from '../store/slices/candidate-slice';
import { setLoading, moveToNextPage } from '../store/slices/page-slice';

export function* postCandidateDetailsSaga({ payload }) {
  yield put(setLoading(true));
  try {
    yield call(postFormData, payload);
    yield put(moveToNextPage());
    yield put(resetCandidate());
  } catch (error) {
    alert(error.message);
  }
  yield put(setLoading(false));
}

export function* watchPostCandidateDetailsSaga() {
  yield takeEvery(postCandidateAction.type, postCandidateDetailsSaga);
}
