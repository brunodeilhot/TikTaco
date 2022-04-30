import { useEffect } from "react";
import services from "./services"

const App = () => {

  useEffect(() => {
    services.feedRecipes()
  }, [])

  return <div>Project started</div>
}
export default App;
