export interface IRecipePreview {
    _id: string;
    title: string;
    picture: string;
    meta: { likes: string[] }
}

export interface IRecipe {
    _id: string;
    title: string;
    picture: string;
    description: string;
    diet: string[];
    servings: number;
    time: number;
    steps: string[];
    ingredients: Ingredient[];
    created_at: number;
    edited_at: number;
    user: IUser;
    meta: IMeta
}

export interface Ingredient {
    name: string;
    quantity: string;
}

interface IUser {
    _id: string;
    username: string;
}

interface IMeta {
    totalLikes: string[];
    totalViews: string[];
}

export interface IDiet {
    glutenFree: boolean;
    dairyFree: boolean;
    vegan: boolean;
    vegetarian: boolean;
    keto: boolean;
}

export interface ICreateRecipe {
  title: string;
  picture: string;
  servings: number;
  time: number;
  ingredients: Ingredient[];
  steps: string[];
  user: string;
  description?: string;
  diet?: string[];
}

export interface IUpdateRecipe extends ICreateRecipe {
    id: string;
}