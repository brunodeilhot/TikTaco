import { Grid } from "@mui/material";
import { IRecipeMeta } from "../../../models/recipe";
import { IUserPreview } from "../../../models/user";
import FavoritesBt from "./FavoritesBt";
import LikesBt from "./LikesBt";
import ProfileBt from "./ProfileBt";

interface Props {
  toggleLike: (e: React.SyntheticEvent, recipeId: string, recipeIsLiked: number) => void;
  handleOpen: () => void;
  handleClickAvatar: () => void;
  handleClickFollow: () => void;
  recipeId: string;
  user: IUserPreview;
  avatarPath: string;
  recipesLiked: IRecipeMeta[];
  totalLikes: number;
}

const MetaContainer: React.FC<Props> = ({
  handleOpen,
  handleClickAvatar,
  recipeId,
  user,
  avatarPath,
  handleClickFollow,
  recipesLiked,
  totalLikes,
  toggleLike
}) => {
  const { username, picture } = user;
  return (
    <Grid
      xs={3}
      container
      item
      flexDirection="column"
      flexWrap="nowrap"
      alignItems="center"
      gap={1}
      pl={1}
      justifyContent="flex-end"
      height="100%"
    >
      <Grid item width="100%" height="100%" onClick={handleOpen}></Grid>
      <ProfileBt
        handleClickAvatar={handleClickAvatar}
        username={username}
        picture={picture}
        avatarPath={avatarPath}
        handleClickFollow={handleClickFollow}
      />
      <LikesBt
        recipeId={recipeId}
        recipesLiked={recipesLiked}
        totalLikes={totalLikes}
        toggleLike={toggleLike}
      />
      <FavoritesBt />
    </Grid>
  );
};

export default MetaContainer;
