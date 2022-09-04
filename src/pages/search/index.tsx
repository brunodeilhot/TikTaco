import { useAuth0 } from "@auth0/auth0-react";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ActionButtons from "../../components/ActionButtons";
import { useAppSelector } from "../../hooks";

const Search = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();
  const isGuest = useAppSelector((state) => state.loginDialog.guest);

  useEffect(() => {
    !isAuthenticated && !isGuest && navigate("/");
  }, [isAuthenticated, isGuest, navigate]);

  return (
    <Grid>
      <div>Search Page</div>
      <ActionButtons />
    </Grid>
  );
};

export default Search;
