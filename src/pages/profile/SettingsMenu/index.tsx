import { CloseRounded } from "@mui/icons-material";
import { Box, Drawer, Grid, IconButton } from "@mui/material";
import About from "./About";
import SettingsList from "./SettingsList";
import ThemeButton from "./ThemeButton";

interface Props {
  settings: boolean;
  toggleSettings: () => void;
}

const Settings: React.FC<Props> = ({ settings, toggleSettings }) => {
  return (
    <Drawer
      anchor="right"
      open={settings}
      onClose={toggleSettings}
      PaperProps={{
        sx: { backgroundColor: "primary.main" },
      }}
    >
      <Grid container width="70vw" flexDirection="column" flexWrap="nowrap" minHeight="100%">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item ml={1}>
            <ThemeButton />
          </Grid>
          <IconButton
            onClick={toggleSettings}
            color="secondary"
            aria-label="close menu"
          >
            <CloseRounded sx={{ fontSize: 50 }} />
          </IconButton>
        </Grid>
        <Box component="nav" role="navigation">
          <SettingsList />
        </Box>
        <About />
      </Grid>
    </Drawer>
  );
};

export default Settings;
