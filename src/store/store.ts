// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // Import your slice

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
