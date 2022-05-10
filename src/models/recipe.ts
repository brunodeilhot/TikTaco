interface Ingredients {
  name: string;
  quantity: string;
}

export interface IRecipe {
  title: string;
  picture: string;
  servings: number;
  time: number;
  ingredients: Array<Ingredients>;
  steps: Array<string>;
  user: string;
  description?: string;
  diet?: Array<string>;
}

export interface IUpdateRecipe extends IRecipe {
    id: string;
}