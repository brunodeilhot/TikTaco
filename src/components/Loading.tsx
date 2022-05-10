import { CircularProgress, Grid } from "@mui/material";
import { Box } from "@mui/system";

const Loading: React.FC = () => (
  <Grid container justifyContent="center">
    <Box m="25vh">
      <CircularProgress size={100} color="primary" />
    </Box>
  </Grid>
);

export default Loading;
