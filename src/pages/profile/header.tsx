import { SettingsRounded } from "@mui/icons-material";
import { Avatar, Grid, IconButton, Typography } from "@mui/material";
import { avatarPath } from "../../env";

interface Props {
  name: string;
  username: string;
  picture: string;
}

const Header: React.FC<Props> = ({ name, username, picture }) => {
  return (
    <Grid container>
      <Grid
        container
        item
        flexWrap="nowrap"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Grid item padding={3}>
          <Typography
            variant="h5"
            component="h1"
            color="primary"
            fontWeight={700}
          >
            {name}
          </Typography>
        </Grid>
        <Grid item position="absolute" right={10}>
          <IconButton onClick={() => console.log("settings")}>
            <SettingsRounded fontSize="large" color="primary" />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container item flexDirection="column" flexWrap="nowrap" alignItems="center">
        <Grid item>
          <Avatar
            alt={name}
            src={`${avatarPath}/${picture}`}
            sx={{ width: 90, height: 90, border: '3px solid', borderColor: 'primary.main' }}
          />
        </Grid>
        <Grid item pt={1}>
          <Typography variant="body2" color="primary">@{username}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
