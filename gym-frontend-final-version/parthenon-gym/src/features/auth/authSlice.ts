import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User, Training } from '../../types';

interface AuthState {
  user: (User & { bookedTrainings: Training[] }) | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = { ...action.payload.user, bookedTrainings: [] };
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    bookTraining: (state, action: PayloadAction<Training>) => {
      if (state.user && !state.user.bookedTrainings.find(t => t.id === action.payload.id)) {
        state.user.bookedTrainings.push(action.payload);
      }
    },
    cancelTraining: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.bookedTrainings = state.user.bookedTrainings.filter(t => t.id !== action.payload);
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setCredentials, logout, bookTraining, cancelTraining } = authSlice.actions;
export default authSlice.reducer;