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
  const {
    addLike,
    removeLike,
    addStar,
    removeStar,
    addFollower,
    removeFollower,
  } = services;
  const recipesLiked = userState.user.meta.rec_liked;
  const recipesStarred = userState.user.meta.rec_starred;
  const usersFollowed = userState.user.meta.following;
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

  const toggleFollow = (
    _e: React.SyntheticEvent,
    userId: string,
    userIsFollowed: number
  ) => {
    userIsFollowed === -1
      ? addFollower(userState.user._id, userId).then(() =>
          setToggle((prevState) => !prevState)
        )
      : removeFollower(userState.user._id, userId).then(() =>
          setToggle((prevState) => !prevState)
        );
  };

  const toggleLike = (
    _e: React.SyntheticEvent,
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

  const toggleStar = (
    _e: React.SyntheticEvent,
    recipeId: string,
    recipeIsStarred: number
  ) => {
    recipeIsStarred === -1
      ? addStar(userState.user._id, recipeId).then(() =>
          setToggle((prevState) => !prevState)
        )
      : removeStar(userState.user._id, recipeId).then(() =>
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
          toggleFollow={toggleFollow}
          recipeId={_id}
          user={user}
          avatarPath={avatarPath}
          recipesLiked={recipesLiked}
          totalLikes={meta.totalLikes}
          toggleLike={toggleLike}
          toggleStar={toggleStar}
          recipesStarred={recipesStarred}
          usersFollowed={usersFollowed}
          activeUser={userState.user._id}
        />
      </Grid>
      <RecipeDetails open={open} handleClose={handleClose} />
    </Grid>
  );
};

export default Recipe;
