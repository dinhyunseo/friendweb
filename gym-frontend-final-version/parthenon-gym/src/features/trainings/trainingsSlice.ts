import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Training } from '../../types';

interface TrainingsState {
  list: Training[];
}

const initialState: TrainingsState = {
  list: [],
};

export const trainingsSlice = createSlice({
  name: 'trainings',
  initialState,
  reducers: {
    addTraining: (state, action: PayloadAction<Training>) => {
      state.list.push(action.payload);
    },
  },
});

export const { addTraining } = trainingsSlice.actions;
export default trainingsSlice.reducer;