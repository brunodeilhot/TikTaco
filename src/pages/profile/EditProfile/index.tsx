import { yupResolver } from "@hookform/resolvers/yup";
import { ChevronLeftRounded } from "@mui/icons-material";
import { Button, Drawer, Grid, IconButton, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import CustomTextField from "../../../components/CreateRecipe/CustomTextField";
import { IUser } from "../../../models/user";
import EditAvatar from "./EditAvatar";

interface Props {
  editProfile: boolean;
  returnToProfile: () => void;
  user: IUser;
}

const EditProfile: React.FC<Props> = ({
  editProfile,
  returnToProfile,
  user,
}) => {
  const methods = useForm<FormData>({
    // resolver: yupResolver(schema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  return (
    <Drawer anchor="right" open={editProfile} onClose={returnToProfile}>
      <Grid
        container
        width="100vw"
        flexDirection="column"
        flexWrap="nowrap"
        alignItems="center"
      >
        <Grid
          container
          item
          justifyContent="center"
          alignItems="center"
          minHeight={60}
          position="relative"
          mb={2}
        >
          <Grid item position="absolute" left={0}>
            <IconButton onClick={returnToProfile}>
              <ChevronLeftRounded
                fontSize="large"
                sx={{ color: "text.primary" }}
              />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h6" component="h1">
              Edit Profile
            </Typography>
          </Grid>
        </Grid>
        <FormProvider {...methods}>
          <EditAvatar picture={user.picture} />
          <Grid
            container
            item
            maxWidth="80%"
            flexDirection="column"
            flexWrap="nowrap"
            paddingY={4}
            gap={4}
          >
            <CustomTextField name="name" label="Name" />
            <CustomTextField name="email" label="Email" />
            <CustomTextField name="username" label="Username" />
            <CustomTextField multiline name="bio" label="Bio" />
            <Button variant="contained" sx={{ color: "background.default", mt: 4}}>Save</Button>
          </Grid>
        </FormProvider>
      </Grid>
    </Drawer>
  );
};

export default EditProfile;
