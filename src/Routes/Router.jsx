import { createBrowserRouter } from "react-router";
import Main_Layout from "./Main_Layout";
import Home_Page from "../Pages/Home_Page";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AvailableFoods from "../Components/AvailableFoods";
import AddFoods from "../Components/AddFoods";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_Layout></Main_Layout>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home_Page,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/availablefoods",
        Component: AvailableFoods,
      },
      {
        path: "/addfood",
        Component: AddFoods,
      },
    ],
  },
]);
