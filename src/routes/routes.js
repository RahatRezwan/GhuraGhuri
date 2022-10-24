import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Account/Login/Login";
import Profile from "../pages/Account/Profile/Profile";
import Register from "../pages/Account/Register/Register";
import Booking from "../pages/Booking/Booking";
import Home from "../pages/Home/Home";
import Places from "../pages/Places/Places";

export const routes = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/home",
            element: <Home />,
         },
         {
            path: "/login",
            element: <Login />,
         },
         {
            path: "/register",
            element: <Register />,
         },
         {
            path: "/profile",
            element: <Profile />,
         },
         {
            path: "/spots",
            element: <Places />,
            loader: async () => fetch("http://localhost:5000/places"),
         },
         {
            path: "/booking/:id",
            element: <Booking />,
            loader: async (params) => fetch(`http://localhost:5000/place/${params.id}`),
         },
      ],
   },
]);
