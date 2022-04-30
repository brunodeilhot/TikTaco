import { api } from "./index"

export function feedRecipes() {
    return api
      .get("/recipes/feed/10")
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
  }