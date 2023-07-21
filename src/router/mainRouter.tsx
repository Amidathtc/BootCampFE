import { createBrowserRouter } from "react-router-dom"
import PrivateRoute from "./PrivateRouter"
import HomeScreen from "../pages/HomeScreen"
import SignIn from "../pages/SignIn"
import Register from "../pages/Register"
import PostScreen from "../pages/PostScreen"
import Uploads from "../pages/Uploads"



export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element:
            <HomeScreen />
    
    },
    {
        path: "/sign-in",
        element: <SignIn />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/post",
        element: <PostScreen />
    },
    {
        path: "/upload",
        element: <Uploads />
    },
]) 