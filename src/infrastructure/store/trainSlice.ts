import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RawTrain } from '../api/TrainApiService/types.ts';

export interface TrainState {
  value: RawTrain[];
}

const initialState: TrainState = {
  value: [],
};

export const trainSlice = createSlice({
  name: 'trains',
  initialState,
  reducers: {
    fetchTrains: (state, action: PayloadAction<RawTrain[]>) => {
      state.value = action.payload;
    },
  },
});

export const { fetchTrains } = trainSlice.actions;

export default trainSlice.reducer;
