import { CircularProgress, Grid, Typography } from "@mui/material";
import useRecipeList from "../../hooks/useRecipeList";
import { VisibilityRounded } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

interface Props {
  userId: string;
  listType: string;
  handleOpen: (id: string) => void;
}

const RecipeList: React.FC<Props> = ({ userId, listType, handleOpen }) => {
  const recipes = useRecipeList(userId, 10, listType);
  const ref = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });
    ref.current && observer.observe(ref.current);
    return () => {
      ref.current && observer.unobserve(ref.current);
    };
  }, []);

  if (!recipes)
    return (
      <Grid
        ref={ref}
        container
        alignItems="center"
        justifyContent="center"
        mt={8}
      >
        <CircularProgress size={100} color="primary" />
      </Grid>
    );

  return (
    <Grid container ref={ref}>
      {recipes.map((recipe) => (
        <Grid
          key={recipe._id}
          container
          item
          height={(width / 3) * 1.48}
          xs={4}
          sx={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.5) 100%), url(${process.env.REACT_APP_RECIPE_IMAGE_PATH}/${recipe.picture})`,
            backgroundColor: "background.default",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            border: "1px solid",
            borderColor: "background.default",
          }}
          onClick={() => handleOpen(recipe._id)}
        >
          <Grid
            container
            item
            alignItems="flex-end"
            justifyContent="flex-end"
            p={1}
          >
            <Typography
              variant="body1"
              fontWeight={700}
              sx={{ color: "text.secondary" }}
            >
              {recipe.meta.totalViews}
            </Typography>
            <VisibilityRounded fontSize="small" sx={{ ml: 1 }} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipeList;
