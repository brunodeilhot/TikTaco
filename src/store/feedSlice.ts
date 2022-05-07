import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRecipePreview } from "../models/recipe";

export interface FeedState {
  followRecipes: IRecipePreview[];
  followActiveRecipe: number;
  discovRecipes: IRecipePreview[];
  discovActiveRecipe: number;
}

const initialState: FeedState = {
  followRecipes: [],
  followActiveRecipe: 0,
  discovRecipes: [],
  discovActiveRecipe: 0,
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    updateFollowActRec: (state, action: PayloadAction<number>) => {
      state.followActiveRecipe = action.payload;
    },
    followAddRecipes: (state, action: PayloadAction<IRecipePreview[]>) => {
      // state.followRecipes = state.followRecipes.concat(action.payload);
      state.followRecipes = action.payload;
    },
    updateDiscovActRec: (state, action: PayloadAction<number>) => {
      state.discovActiveRecipe = action.payload;
    },
    discovAddRecipes: (state, action: PayloadAction<IRecipePreview[]>) => {
      // state.discovRecipes = state.discovRecipes.concat(action.payload);
      state.discovRecipes = action.payload;
    },
  },
});

export const {
  updateFollowActRec,
  followAddRecipes,
  updateDiscovActRec,
  discovAddRecipes,
} = feedSlice.actions;

export default feedSlice.reducer;
