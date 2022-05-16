import { Grid } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { IRecipePreview } from "../../../models/recipe";
import RecipeDetails from "../../../components/RecipeDetails";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import services from "../../../services";
import Title from "./Title";
import MetaContainer from "./MetaContainer";
import useUpdateMeta from "../../../hooks/useUpdateMeta";

interface Props {
  recipe: IRecipePreview;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const Recipe: React.FC<Props> = ({ recipe, setToggle }) => {
  const imagePath = "http://192.168.1.5:3000/images/recipes";
  const avatarPath = "http://192.168.1.5:3000/images/users";
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.user);
  const { addLike, removeLike } = services;
  const recipesLiked = userState.user.meta.rec_liked;
  const { _id, title, picture, meta, user } = recipe;

  const userEmail = "maria@fakemail.com";

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickAvatar = () => {
    console.log(userState);
    console.log("avatar");
  };

  const handleClickFollow = () => {
    console.log("follow");
  };

  const toggleLike = (
    e: React.SyntheticEvent,
    recipeId: string,
    recipeIsLiked: number
  ) => {
    recipeIsLiked === -1
      ? addLike(recipeId, userState.user._id).then(() =>
          setToggle((prevState) => !prevState)
        )
      : removeLike(recipeId, userState.user._id).then(() =>
          setToggle((prevState) => !prevState)
        );
  };

  return (
    <Grid
      container
      width="100%"
      height="100%"
      flexDirection="column"
      justifyContent="flex-end"
      sx={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), url(${imagePath}/${picture})`,
        backgroundColor: "background.default",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid
        container
        flexWrap="nowrap"
        marginBottom="76px"
        zIndex="appBar"
        height="100%"
      >
        <Title handleOpen={handleOpen} title={title} />
        <MetaContainer
          handleOpen={handleOpen}
          handleClickAvatar={handleClickAvatar}
          handleClickFollow={handleClickFollow}
          recipeId={_id}
          user={user}
          avatarPath={avatarPath}
          recipesLiked={recipesLiked}
          totalLikes={meta.totalLikes}
          toggleLike={toggleLike}
        />
      </Grid>
      <RecipeDetails open={open} handleClose={handleClose} />
    </Grid>
  );
};

export default Recipe;
