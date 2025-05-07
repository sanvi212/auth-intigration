import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Routes from "../Routes/Routes";
import Orders from "../Components/Orders/Orders";
import Profile from "../Components/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path:"orders",
        element: <Routes><Orders></Orders></Routes>
      },
      {
        path:'profile',
        element:<Routes><Profile></Profile></Routes>
      }
    ]
  },
]);
