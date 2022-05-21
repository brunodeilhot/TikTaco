import { Dialog, Fade, Grid } from "@mui/material";
import React from "react";
import Loading from "../Loading";

interface Props {
  open: boolean;
  handleCreate: () => void;
}

const CreateRecipe: React.FC<Props> = ({ open, handleCreate }) => {
  // const { desktop } = useSelector((state) => state.mediaqueries);
  const desktop = false;

  return (
    <Dialog
      aria-labelledby="recipe-details-title"
      open={open}
      onClose={handleCreate}
      TransitionComponent={Fade}
      transitionDuration={800}
      fullScreen={!desktop}
      hideBackdrop={!desktop}
    >
      <Grid container>Create Recipe</Grid>
    </Dialog>
  );
};

export default CreateRecipe;
