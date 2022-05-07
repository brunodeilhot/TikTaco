import { Grid, Typography } from "@mui/material";
import { IRecipePreview } from "../../../models/recipe";

interface Props {
  recipe: IRecipePreview;
}

const Recipe: React.FC<Props> = ({ recipe }) => {
  const imagePath = "http://localhost:3000/images/recipes/feed";
  const { title, picture, meta, } = recipe;

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
      <Grid item maxWidth="70%" marginBottom="76px" marginLeft={4}>
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
    </Grid>
  );
};

export default Recipe;
