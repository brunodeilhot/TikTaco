import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import services from "./services";
import { responsiveDarkTheme, responsiveLightTheme } from "./Theme";

const {
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
  totalLikes,
} = services;

const App = () => {
  useEffect(() => {
    // createRecipe(({
    //   title: "Pizza Vegan",
    //   picture: "0002000.jpg",
    //   servings: 4,
    //   time: 30,
    //   ingredients: [{
    //     name: "Broccoli",
    //     quantity: "300 grams"
    //   }, {
    //     name: "Gluten Free Flower",
    //     quantity: "500 grams"
    //   }, {
    //     name: "Tomatoes",
    //     quantity: "8"
    //   }],
    //   steps: ["smash the flower", "put in the hover", "eat pizza"],
    //   user: "626675ffc2ee3c90b785c9e2",
    //   diet: ["v", "vv", "gf"]
    // }));

    // updateRecipe({
    //   id: "627ff44b9e346077352c1894",
    //   description: "Amazing Bolognese Pizza for the entire family",
    //   servings: 8
    // });

    // findRecipeById("62802f4ed930a4c809b482c7", "626675ffc2ee3c90b785c9e2")

    // findRecipeByUser("626675ffc2ee3c90b785c9e2")

    // feedRecipes(10, "626675ffc2ee3c90b785c9e2")

    // addLike("6280d93500a398e7477015a2", "6280d472092bc5d7988165ab")

    // removeLike("62802f4ed930a4c809b482c7", "626675ffc2ee3c90b785c9e2")

    // removeStar("626675ffc2ee3c90b785c9e2", "62802f4ed930a4c809b482c7")

    // createUser({ name: "Joaquim alberto", email: "joaquim@fakemail.com", username: "joaquim"})

    // updateUser({id: "6280d472092bc5d7988165ab", username: "zebedeu"})

    // findUserByEmail("joaquim@fakemail.com")

    // findUserById("626675ffc2ee3c90b785c9e2")

    // addFollower("6280d472092bc5d7988165ab", "626675ffc2ee3c90b785c9e2")

    // removeFollower("6280d472092bc5d7988165ab", "626675ffc2ee3c90b785c9e2")

    // totalLikes("626675ffc2ee3c90b785c9e2")

  }, []);

  return (
    <ThemeProvider theme={responsiveLightTheme}>
      <CssBaseline />
      <Outlet />
    </ThemeProvider>
  );
};
export default App;
