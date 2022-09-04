import {
  Box,
  CircularProgress,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import useViewSize from "../hooks/useViewSize";
import Logo from "../assets/Logo.svg";

type Props = {
  fullWidth?: boolean;
};

const Loading: React.FC<Props> = ({ fullWidth }) => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  const { viewHeight } = useViewSize();

  const desktopWidth = fullWidth ? "100%" : "30vw";

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      flexWrap="nowrap"
      height={viewHeight}
      width={desktop ? desktopWidth : "100vw"}
      paddingX={desktop ? "30%" : 0}
      sx={{ backgroundColor: "background.default" }}
    >
      <Grid item>
        <Box
          component="img"
          width={170}
          height={106}
          src={Logo}
          alt="Large whatsinmypantry smiling taco logo"
        />
      </Grid>
      <Grid item>
        <Typography variant="h1">TikTaco</Typography>
      </Grid>
      <Grid item mt={10}>
        <CircularProgress size={150} color="primary" />
      </Grid>
    </Grid>
  );
};

export default Loading;
