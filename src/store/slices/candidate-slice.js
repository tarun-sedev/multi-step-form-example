import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '', // required String
  lastName: '',
  email: '', // required String
  phoneNumber: '',
  liveInUS: false, // required Boolean
  gitProfile: '', // required String
  resume: null, // required file
  coverLetter: null,
  about: '', // required String
};

export const postCandidateAction = createAction('candidate/postData');

const candidateSlice = createSlice({
  name: 'candidate',
  initialState,
  reducers: {
    setCandidateInfo: (state, action) => {
      const { firstName, lastName, email, phoneNumber, liveInUS } =
        action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.phoneNumber = phoneNumber;
      state.liveInUS = liveInUS;
    },
    setProfessionalInfo: (state, action) => {
      const { gitProfile, resume, coverLetter, about } = action.payload;
      state.gitProfile = gitProfile;
      state.resume = resume;
      state.coverLetter = coverLetter;
      state.about = about;
    },
    resetCandidate: (state) => {
      state.firstName = '';
      state.lastName = '';
      state.email = '';
      state.phoneNumber = '';
      state.liveInUS = false;
      state.gitProfile = '';
      state.resume = null;
      state.coverLetter = null;
      state.about = '';
    },
  },
});

export const candidateReducer = candidateSlice.reducer;

export const { setCandidateInfo, setProfessionalInfo, resetCandidate } =
  candidateSlice.actions;
