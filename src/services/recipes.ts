import { IRecipe, IUpdateRecipe } from "../models/recipe";
import { api, baseURL } from "./index";

export function createRecipe({
  title,
  picture,
  servings,
  time,
  ingredients,
  steps,
  user,
  description,
  diet,
}: IRecipe) {
  api
    .post(`${baseURL}/recipes/create`, {
      title: title,
      picture: picture,
      servings: servings,
      time: time,
      ingredients: ingredients,
      steps: steps,
      user: user,
      description: description,
      diet: diet,
    })
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

export function updateRecipe({
  id,
  title,
  picture,
  servings,
  time,
  ingredients,
  steps,
  description,
  diet,
}: IUpdateRecipe) {
  api
    .put(`${baseURL}/recipes/update/${id}`, {
      id: id,
      title: title,
      picture: picture,
      servings: servings,
      time: time,
      ingredients: ingredients,
      steps: steps,
      description: description,
      diet: diet,
    })
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

export function findRecipePublic(id: string, userId: string) {
  api
    .get(`${baseURL}/recipes/find/id/${id}/${userId}/public`)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

export function findRecipePrivate(id: string, userId: string) {
  api
    .get(`${baseURL}/recipes/find/id/${id}/${userId}/private`)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

export function findRecipeByUser(userId: string, limit: number = 10) {
  api
    .get(`${baseURL}/recipes/find/user/${userId}/${limit}`)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

export function feedRecipes(limit: number = 10) {
  return api
    .get(`/recipes/feed${limit}`)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

export function addLike(id: string, userId: string) {
  api
    .post(`${baseURL}/recipes/${id}/add/${userId}`)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

export function removeLike(id: string, userId: string) {
  api
    .delete(`${baseURL}/recipes/${id}/remove/${userId}`)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

export function addStar(id: string, recipeId: string) {
  api
    .post(`${baseURL}/user/meta/stars/${id}/add/${recipeId}`)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

export function removeStar(id: string, recipeId: string) {
  api
    .delete(`${baseURL}/user/meta/stars/${id}/remove/${recipeId}`)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}