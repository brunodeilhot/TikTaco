import { Dialog, Fade, Grid } from "@mui/material";
import React, { useState } from "react";
import Header from "./Header";
import Intro from "./Intro";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Footer from "./Footer";
import Loading from "../Loading";
import { IRecipe } from "../../models/recipe";

interface Props {
  open: boolean;
  handleClose: () => void;
}

const RecipeDetails: React.FC<Props> = ({ open, handleClose }) => {
  // const { desktop } = useSelector((state) => state.mediaqueries);
  const desktop = false;

  // State management of the recipe details data
  const [recipeDetails, setRecipeDetails] = useState<IRecipe>({
    _id: "1",
    title: "Amazing Recipe",
    description: "",
    picture: "",
    diet: ["v", "vv"],
    servings: 4,
    time: 0,
    ingredients: [{ name: "tomato", quantity: "16" }],
    steps: ["Smash the tomatoes", "Eat the tomatoes"],
    created_at: 0,
    edited_at: 0,
    user: {
      _id: "1",
      username: "Bambi",
    },
    meta: {
      likes: [],
      views: [],
      totalLikes: 0,
      totalViews: 0,
    },
  });

  // Destructuring of the recipe details data received from the api
  const {
    _id,
    title,
    description,
    picture,
    diet,
    servings,
    time,
    ingredients,
    steps,
    created_at,
    user,
    meta,
  } = recipeDetails;

  return (
    <Dialog
      aria-labelledby="recipe-details-title"
      open={open}
      onClose={handleClose}
      TransitionComponent={Fade}
      transitionDuration={800}
      fullScreen={!desktop}
      hideBackdrop={!desktop}
    >
      {recipeDetails === undefined ? (
        <Loading />
      ) : (
        <Grid container>
          <Grid container item>
            <Header handleTransition={handleClose} picture={picture} />
          </Grid>
          <Grid
            container
            item
            direction="column"
            alignItems="stretch"
            pl={2.5}
            pr={2.5}
          >
            <Intro title={title} time={time} servings={servings} diet={diet} />
            <Ingredients ingredients={ingredients} />
            <Instructions steps={steps} />
            <Footer username={user.username} id={user._id} />
          </Grid>
        </Grid>
      )}
    </Dialog>
  );
};

export default RecipeDetails;
