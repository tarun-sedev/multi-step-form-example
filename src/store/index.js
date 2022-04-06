import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { watchPostCandidateDetailsSaga } from '../sagas/candidateSaga';
import { candidateReducer } from './slices/candidate-slice';
import { pageReducer } from './slices/page-slice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    candidate: candidateReducer,
    page: pageReducer,
  },
  middleware: [sagaMiddleware, logger],
});

sagaMiddleware.run(watchPostCandidateDetailsSaga);

export default store;
