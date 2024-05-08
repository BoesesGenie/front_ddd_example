import { configureStore } from '@reduxjs/toolkit';
import trainReducer from './trainSlice.ts';

export const store = configureStore({
  reducer: { trains: trainReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
