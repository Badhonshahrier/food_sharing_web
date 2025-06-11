import { createBrowserRouter, useParams } from "react-router";
import Main_Layout from "./Main_Layout";
import Home_Page from "../Pages/Home_Page";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AvailableFoods from "../Components/AvailableFoods";
import AddFoods from "../Components/AddFoods";
import View_Details from "../Pages/View_Details";

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
      {
        path: "/food_details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addfoods/available/${params.id}`),
        Component: View_Details,
      },
    ],
  },
]);
