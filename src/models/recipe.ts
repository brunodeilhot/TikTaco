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
    user: User;
    meta: Meta
}

export interface Ingredient {
    name: string;
    quantity: string;
}

interface User {
    _id: string;
    username: string;
}

interface Meta {
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