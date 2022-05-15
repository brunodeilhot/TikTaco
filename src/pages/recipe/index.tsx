import { Dialog, Grid, Slide } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useMatch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Intro from "./Intro";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Footer from "./Footer";
import Loading from "../../components/Loading";
import ErrorPage from "../../components/ErrorPage";
import { TransitionProps } from "@mui/material/transitions";
import { IRecipe } from "../../models/recipe";

const Recipe: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { desktop } = useSelector((state) => state.mediaqueries);
  const desktop = false;

  // Manages the state of the recipe details page (open/close)
  const [open, setOpen] = useState(true);

  // When the user closes the details page a timeout is set to allow the
  // animation to complete
  const handleTransition = () => {
    setOpen(false);
    setTimeout(handleClose, 800);
  };

  // Closing the Recipe Details page will return to previous page
  // wether that page was starred or recipes, even if the user
  // came from outside the app
  const matchRecipes = useMatch("/recipes/*");

  const handleClose = () => {
    // if (matchRecipes) {
    //   return navigate("/recipes");
    // }
    // navigate("/starred");
    navigate(-1)
  };

  // Destructure of the id parameter used to get detailed recipe data from api
  const { id } = useParams();

  // If an id return no data then noResults is set to true and a message is displayed
  const [noResults, setNoResults] = useState(false);

  // State management of the recipe details data
  const [recipeDetails, setRecipeDetails] = useState<IRecipe>({
    _id: "1",
    title: "Amazing Recipe",
    description: "",
    picture: "",
    diet: ["v", "vv"],
    servings: 4,
    time: 0,
    ingredients: [{name: "tomato", quantity: "16"}],
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

  // useEffect(() => {
  //   getRecipeDetails(id, (searchResults) => {
  //     if (searchResults === 402) {
  //       return dispatch({ type: "API_LIMIT", payload: true });
  //     }
  //     dispatch({ type: "API_LIMIT", payload: false });

  //     if (searchResults === undefined) {
  //       return setNoResults(true);
  //     }
  //     setNoResults(false);

  //     setRecipeDetails(searchResults);
  //   });
  // }, [dispatch, id]);

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction="up" mountOnEnter unmountOnExit ref={ref} {...props} />;
  });

  // When the details component is opened and while the data is unavailable
  // a loading animation is presented
  const details =
    recipeDetails === undefined ? (
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
    );

  return (
    <Dialog
      aria-labelledby="recipe-details-title"
      open={open}
      onClose={handleTransition}
      TransitionComponent={Transition}
      fullScreen={!desktop}
    >
      {noResults ? <ErrorPage /> : details}
    </Dialog>
  );
};

export default Recipe;
