import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Destination from "../Pages/Destination/Destination";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import SearchPage from "../Pages/SearchPage/SearchPage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/destination',
                element: <Destination></Destination>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/search',
                element: <SearchPage></SearchPage>
            }
        ]
    },
]);

export default Router;