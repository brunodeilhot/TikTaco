import { Route, Routes } from "react-router";
import App from "./App";
import Home from "./pages/home";
import Profile from "./pages/profile";


const MainRoutes = () => {
    
    return(
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="profile" element={<Profile />} />
            </Route>
        </Routes>
    )
}

export default MainRoutes;