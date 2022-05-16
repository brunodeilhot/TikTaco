import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../models/user";

interface UserState {
  user: IUser
}

const initialState: UserState = {
  user: {
    id: "",
    email: "",
    name: "",
    username: "",
    birthday: Date.now(),
    picture: "",
    bio: "",
    created_at: Date.now(),
    privateProfile: false,
    PrivateLikes: false,
    meta: {
      rec_liked: [],
      rec_starred: [],
      followers: [],
      following: [],
    },
  },
};


export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state: UserState, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    }
  },
});

export const {
  updateUser
} = UserSlice.actions;

export default UserSlice.reducer;