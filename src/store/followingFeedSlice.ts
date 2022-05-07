import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRecipePreview } from "../models/recipe";


export interface followingFeedState {
    recipes: IRecipePreview[],
    activeRecipe: number
}

const initialState: followingFeedState = {
    recipes: [],
    activeRecipe: 0
}

export const followingFeedSlice = createSlice({
    name: "followingFeed",
    initialState,
    reducers: {
        updateActiveRecipe: (state, action: PayloadAction<number>) => {
            state.activeRecipe = action.payload
        },
        addRecipes: (state, action: PayloadAction<IRecipePreview[]>) => {
           state.recipes = state.recipes.concat(action.payload)
        }
    }
})

export const { updateActiveRecipe, addRecipes } = followingFeedSlice.actions

export default followingFeedSlice.reducer