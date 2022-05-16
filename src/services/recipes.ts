import { ICreateRecipe, IRecipe, IRecipePreview, IUpdateRecipe } from "../models/recipe";
import { api, baseURL } from "./index";

export const createRecipe = async ({
  title,
  picture,
  servings,
  time,
  ingredients,
  steps,
  user,
  description,
  diet,
}: ICreateRecipe): Promise<IRecipe> => {
  return api
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
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return error.message;
    });
};

export const updateRecipe = async ({
  id,
  title,
  picture,
  servings,
  time,
  ingredients,
  steps,
  description,
  diet,
}: IUpdateRecipe): Promise<IRecipe> => {
  return api
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
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return error.message;
    });
};

export const findRecipeById = async (
  id: string,
  userId: string
): Promise<IRecipe> => {
  return api
    .get(`${baseURL}/recipes/find/id/${id}/${userId}`)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return error.message;
    });
};

export const findRecipeByUser = async (
  userId: string,
  limit: number = 10
): Promise<IRecipe[]> => {
  return api
    .get(`${baseURL}/recipes/find/user/${userId}/${limit}`)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return error.message;
    });
};

export const feedRecipes = async (
  limit: number = 10,
  user: string = "",
): Promise<IRecipePreview[] | string> => {
  return api
    .get(`/recipes/feed/${limit}/${user}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return error.message;
    });
};

export const addLike = async (
  id: string,
  userId: string
): Promise<number | string> => {
  return api
    .post(`${baseURL}/recipes/meta/likes/${id}/add/${userId}`)
    .then((response) => {
      console.log(response);
      return response.status;
    })
    .catch((error) => {
      console.error(error);
      return error.message;
    });
};

export const removeLike = async (
  id: string,
  userId: string
): Promise<number | string> => {
  return api
    .delete(`${baseURL}/recipes/meta/likes/${id}/remove/${userId}`)
    .then((response) => {
      console.log(response);
      return response.status;
    })
    .catch((error) => {
      console.error(error);
      return error.message;
    });
};

export const addStar = async (
  userId: string,
  recipeId: string
): Promise<number | string> => {
  return api
    .post(`${baseURL}/user/meta/stars/${userId}/add/${recipeId}`)
    .then((response) => {
      console.log(response);
      return response.status;
    })
    .catch((error) => {
      console.error(error);
      return error.message;
    });
};

export const removeStar = async (
  userId: string,
  recipeId: string
): Promise<number | string> => {
  return api
    .delete(`${baseURL}/user/meta/stars/${userId}/remove/${recipeId}`)
    .then((response) => {
      console.log(response);
      return response.status;
    })
    .catch((error) => {
      console.error(error.message);
      return error.message;
    });
};

const methods = {
  feedRecipes
}
export default methods;