import { CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import LoginDialog from "./components/LoginDialog";
import { responsiveDarkTheme, responsiveLightTheme } from "./Theme";


const App = () => {

  return (
    <ThemeProvider theme={responsiveDarkTheme}>
      <CssBaseline />
      <Outlet />
      <LoginDialog />
    </ThemeProvider>
  );
};
export default App;
