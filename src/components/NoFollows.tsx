import { Box, Grid, Typography } from "@mui/material";
import useViewSize from "../hooks/useViewSize";
import Logo from "../assets/SadLogo.svg";

const NoFollows: React.FC = () => {
  const { viewHeight } = useViewSize();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      flexWrap="nowrap"
      height={viewHeight}
      marginLeft={2}
      marginRight={2}
      sx={{ backgroundColor: "background.default" }}
    >
      <Grid item>
        <Box
          component="img"
          width={170}
          height={106}
          src={Logo}
          alt="Large whatsinmypantry smiling taco logo"
          mb={5}
        />
      </Grid>
      <Grid item>
        <Typography variant="h4" textAlign="center">
          You are not following anyone.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5" textAlign="center">
          Follow someone to see only their content!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NoFollows;
