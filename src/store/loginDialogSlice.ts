import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginDialogState {
  open: boolean;
  guest: boolean;
}

const initialState: LoginDialogState = {
  open: false,
  guest: false,
};

export const LoginDialogSlice = createSlice({
  name: "loginDialog",
  initialState,
  reducers: {
    updateDialogStatus: (
      state: LoginDialogState,
      action: PayloadAction<boolean>
    ) => {
      state.open = action.payload;
    },
    loginAsGuest: (state: LoginDialogState, action: PayloadAction<boolean>) => {
      state.guest = action.payload;
    },
  },
});

export const { updateDialogStatus, loginAsGuest } = LoginDialogSlice.actions;

export default LoginDialogSlice.reducer;
