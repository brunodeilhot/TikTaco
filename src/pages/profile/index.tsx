import { Button, Grid, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import ActionButtons from "../../components/ActionButtons";
import RecipeDetails from "../../components/RecipeDetails";
import { useAppSelector } from "../../hooks";
import Header from "./Header";
import Meta from "./Meta";
import ProfileFeedTab from "./ProfileFeedTab";
import RecipeList from "./RecipeList";

const Profile: React.FC = () => {
  const { user } = useAppSelector((state) => state.user);

  /**
   * State and handle function responsible for the tab menu
   */
  const [tabValue, setTabValue] = useState("recipes");

  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  /**
   * State and handle functions responsible for the recipe details modal
   */
  const [open, setOpen] = useState<boolean>(false);
  const [recipeId, setRecipeId] = useState<string>();

  const handleOpen = (id: string) => {
    setRecipeId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container flexDirection="column" flexWrap="nowrap">
      <Header
        name={user.name}
        username={user.username}
        picture={user.picture}
      />
      <Meta user={user._id} meta={user.meta} />
      <Grid item alignSelf="center">
        <Button
          variant="outlined"
          sx={{ borderRadius: 10, textTransform: "uppercase", fontSize: 10 }}
        >
          edit profile
        </Button>
      </Grid>
      <Grid item p={3}>
        <Typography variant="body2">{user.bio}</Typography>
      </Grid>
      <ProfileFeedTab handleTabChange={handleTabChange} tabValue={tabValue} />
      <RecipeList
        userId={user._id}
        listType={tabValue}
        handleOpen={handleOpen}
      />
      {recipeId && (
        <RecipeDetails
          open={open}
          handleClose={handleClose}
          recipeId={recipeId}
        />
      )}
      <Toolbar />
      <ActionButtons />
    </Grid>
  );
};

export default Profile;
