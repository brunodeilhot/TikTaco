import { Avatar, Grid, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteBorder from "../../../icons/FavoriteBorder";
import LikeBorder from "../../../icons/LikeBorder";
import ProfileFollow from "../../../icons/ProfileFollow";
import { IRecipePreview } from "../../../models/recipe";

interface Props {
  recipe: IRecipePreview;
}

const Recipe: React.FC<Props> = ({ recipe }) => {
  const imagePath = "http://192.168.1.4:3000/images/recipes/feed";
  const AvatarImg = "http://192.168.1.4:3000/images/users/avatar-pic.png";
  const { _id, title, picture, meta } = recipe;

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
      <Grid
        container
        flexWrap="nowrap"
        marginBottom="76px"
        zIndex="appBar"
        height="100%"
      >
        <Grid
          xs={9}
          container
          item
          flexDirection="column"
          flexWrap="nowrap"
          paddingLeft={4}
          justifyContent="flex-end"
          height="100%"
          component={Link}
          to={`/recipe/${_id}`}
          sx={{ textDecoration: "none" }}
        >
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
          <Typography
          pt={2}
          mb={0}
            paragraph
            textTransform="uppercase"
            fontWeight={700}
            sx={{
              fontSize: 12,
              color: "#FAFAFA",
              textShadow: "0px 3px 3px rgba(0, 0, 0, 0.25)",
            }}
          >
            view recipe step by step
          </Typography>
        </Grid>
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
          <Grid
            item
            width="100%"
            height="100%"
            component={Link}
            to={`/recipe/${_id}`}
          ></Grid>
          <Grid item position="relative" mb={2}>
            <IconButton onClick={handleClickAvatar}>
              <Avatar
                alt="Maria Chang"
                src={AvatarImg}
                sx={{ width: 66, height: 66, border: "3px solid #FFF" }}
              />
            </IconButton>
            <IconButton
              onClick={handleClickFollow}
              sx={{ position: "absolute", padding: 0, bottom: 0, left: 31 }}
            >
              <ProfileFollow viewBox="0 0 16 16" fontSize="small" />
            </IconButton>
          </Grid>

          <IconButton sx={{ position: "relative", paddingBottom: 2.5 }}>
            <LikeBorder sx={{ fontSize: 40 }} />
            <Typography
              variant="body2"
              component="span"
              position="absolute"
              top={50}
              fontWeight={700}
              sx={{
                color: "#FAFAFA",
                textShadow: "0px 3px 3px rgba(0, 0, 0, 0.25)",
              }}
            >
              {meta.likes}
            </Typography>
          </IconButton>
          <IconButton>
            <FavoriteBorder sx={{ fontSize: 46 }} />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Recipe;
