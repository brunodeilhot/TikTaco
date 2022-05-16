import axios from "axios";
import {
  createRecipe,
  updateRecipe,
  findRecipeById,
  findRecipeByUser,
  feedRecipes,
  addLike,
  removeLike,
  addStar,
  removeStar,
} from "./recipes";
import {
  createUser,
  updateUser,
  findUserByEmail,
  findUserById,
  addFollower,
  removeFollower,
  totalLikes,
} from "./user";

export const baseURL = "http://192.168.1.5:8000";

export const api = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const services = {
  createRecipe,
  updateRecipe,
  findRecipeById,
  findRecipeByUser,
  feedRecipes,
  addLike,
  removeLike,
  addStar,
  removeStar,
  createUser,
  updateUser,
  findUserByEmail,
  findUserById,
  addFollower,
  removeFollower,
  totalLikes
};

export default services;
