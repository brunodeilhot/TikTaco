import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import services from "./services"

const App = () => {

  useEffect(() => {
    services.feedRecipes()
  }, [])

  return <Outlet />
}
export default App;
