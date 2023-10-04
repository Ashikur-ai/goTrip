import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
]);

export default Router;