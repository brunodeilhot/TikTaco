import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "./feedSlice";
import loginDialogReducer from "./loginDialogSlice"
import userReducer from "./userSlice"

export const store = configureStore({
  reducer: {
    feed: feedReducer,
    loginDialog: loginDialogReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
