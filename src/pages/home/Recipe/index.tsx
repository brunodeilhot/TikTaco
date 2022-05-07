import {
  AddCircleRounded,
  FavoriteRounded,
  StarRounded,
} from "@mui/icons-material";
import { Avatar, Badge, Grid, IconButton, Typography } from "@mui/material";
import { IRecipePreview } from "../../../models/recipe";

interface Props {
  recipe: IRecipePreview;
}

const Recipe: React.FC<Props> = ({ recipe }) => {
  const imagePath = "http://192.168.1.3:3000/images/recipes/feed";
  const AvatarImg = "http://192.168.1.3:3000/images/users/avatar-pic.png";
  const { title, picture, meta } = recipe;

  const handleClickAvatar = () => {
    console.log("avatar");
  };

  const handleClickFollow = () => {
    console.log("follow");
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
      <Grid container flexWrap="nowrap" marginBottom="76px">
        <Grid xs={9} item paddingLeft={4} alignSelf="flex-end">
          <Typography
            component="h1"
            variant="h4"
            fontWeight={700}
            sx={{
              color: "#FAFAFA",
              textShadow: "0px 3px 3px rgba(0, 0, 0, 0.25)",
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid
          xs={3}
          container
          item
          flexDirection="column"
          flexWrap="nowrap"
          alignItems="center"
        >
          <Grid item position="relative">
            <IconButton onClick={handleClickAvatar}>
              <Avatar alt="Maria Chang" src={AvatarImg} />
            </IconButton>
            <IconButton onClick={handleClickFollow} sx={{ position: "absolute", padding: 0, bottom: -2, left: 18 }}>
                  <AddCircleRounded fontSize="small" />
            </IconButton>
          </Grid>

          <IconButton>
            <FavoriteRounded fontSize="large" />
          </IconButton>
          <IconButton>
            <StarRounded fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Recipe;
