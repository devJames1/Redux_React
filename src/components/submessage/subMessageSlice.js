import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: 'Subscribe to Agileconsullt',
};

export const subMessageSlice = createSlice({
  name: 'subMessage',
  initialState,
  reducers: {
    buttonChange: (state) => {
      state.message = 'Thank you for subscribing';
    },
  },
});

export const { buttonChange } = subMessageSlice.actions;
export default subMessageSlice.reducer;
