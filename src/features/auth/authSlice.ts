import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  authToken: string | null;
  user: {
    firstName: string;
    lastName: string;
  } | null;
}

const initialState: AuthState = {
  authToken: null,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        authToken: string;
        user?: {
          firstName: string;
          lastName: string;
        };
      }>
    ) => {
      state.authToken = action.payload.authToken;
      if (action.payload.user) {
        state.user = action.payload.user;
      }
    },
    logout: (state) => {
      state.authToken = null;
      state.user = null;
    },
    setUserData: (
      state,
      action: PayloadAction<{ firstName: string; lastName: string }>
    ) => {
      state.user = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    },
  },
  selectors: {
    selectUser: (state) => state.user,
  },
});

export const { login, logout, setUserData } = authSlice.actions;

export const { selectUser } = authSlice.selectors;

export default authSlice.reducer;
