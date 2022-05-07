import { configureStore } from "@reduxjs/toolkit";
import followingFeedReducer from "./followingFeedSlice";

export const store = configureStore({
  reducer: {
    followingFeed: followingFeedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
