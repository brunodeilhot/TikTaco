import { CloseRounded } from "@mui/icons-material";
import { Fab, Grid } from "@mui/material";

interface Props {
  handleTransition: () => void;
  picture: string;
}

const Header: React.FC<Props> = ({ handleTransition, picture }) => (
  <Grid
    container
    item
    justifyContent="flex-end"
    alignItems="flex-start"
    minHeight="30vh"
    bgcolor="text.secondary"
    borderBottom="5px solid"
    borderColor="primary.main"
    sx={{
      background: `url(${picture}) no-repeat`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <Fab
      aria-label="close"
      color="primary"
      onClick={handleTransition}
      sx={{ backgroundColor: "secondary.main", mr: 2, mt: 3, p: 0.5 }}
    >
      <CloseRounded color="primary" sx={{ fontSize: 40 }} />
    </Fab>
  </Grid>
);

export default Header;
