import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import services from "./services";
import { responsiveDarkTheme, responsiveLightTheme } from "./Theme";

const App = () => {
  // useEffect(() => {
  //   services.feedRecipes();
  // }, []);

  return (
    <ThemeProvider theme={responsiveLightTheme}>
      <CssBaseline />
      <Outlet />
    </ThemeProvider>
  );
};
export default App;
