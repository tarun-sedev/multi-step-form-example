import { testSaga } from 'redux-saga-test-plan';
import { postFormData } from '../../api/httpClient';
import { postCandidateDetailsSaga } from '../../sagas/candidateSaga';
import { resetCandidate } from '../../store/slices/candidate-slice';
import { moveToNextPage, setLoading } from '../../store/slices/page-slice';
import { prepareData } from '../../utils/postFormUtils';
import { mockInitialState } from '../mocks/state';

describe('candidateSaga', () => {
  it('calls to post candidate form data', () => {
    const mockPayload = prepareData(mockInitialState);
    testSaga(postCandidateDetailsSaga, { payload: mockPayload })
      .next()
      .put(setLoading(true))
      .next()
      .call(postFormData, mockPayload)
      .next()
      .put(moveToNextPage())
      .next()
      .put(resetCandidate())
      .next()
      .put(setLoading(false))
      .next()
      .isDone();
  });
});
