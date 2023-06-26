import { configureStore } from '@reduxjs/toolkit';
import subMessageReducer from '../components/submessage/subMessageSlice';

export const store = configureStore({
  reducer: {
    subMessage: subMessageReducer,
  },
});
