import { createSlice } from '@reduxjs/toolkit';

/**
 * 1 - Candidate Info
 * 2 - Professional Info
 * 3 - Review
 * 4 - Confiramtion
 */

const initialState = { page: 1, isLoading: false };

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    moveToNextPage: (state) => {
      state.page = state.page + 1;
    },
    moveToPreviousPage: (state) => {
      state.page = state.page - 1;
    },
    moveToHome: (state) => {
      state.page = 1;
    },
  },
});

export const pageReducer = pageSlice.reducer;

export const { moveToNextPage, moveToPreviousPage, moveToHome, setLoading } =
  pageSlice.actions;
