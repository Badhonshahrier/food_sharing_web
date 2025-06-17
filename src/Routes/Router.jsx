import { createBrowserRouter } from "react-router";
import Main_Layout from "./Main_Layout";
import Home_Page from "../Pages/Home_Page";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AvailableFoods from "../Components/AvailableFoods";
import AddFoods from "../Components/AddFoods";
import View_Details from "../Pages/View_Details";
import Modal from "../Components/Modal";
import MyFoodRequest from "../Components/MyFoodRequest";
import PrivateRoutes from "../Components/PrivateRoutes/PrivateRoutes";
import ManageMyFood from "../Components/ManageMyFood";
import UpdateFood from "../Components/UpdateFood";

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
        element: (
          <PrivateRoutes>
            <AddFoods></AddFoods>
          </PrivateRoutes>
        ),
      },
      {
        path: "/food_details/:id",
        loader: ({ params }) =>
          fetch(`https://food-sharing-server-nu.vercel.app/addfoods/available/${params.id}`),
        element: (
          <PrivateRoutes>
            <View_Details />
          </PrivateRoutes>
        ),
      },
      {
        loader: ({ params }) =>
          fetch(`https://food-sharing-server-nu.vercel.app/addfoods/available/${params.id}`),
        Component: Modal,
      },
      {
        path: "/myfoodrequest/",
        element: (
          <PrivateRoutes>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRoutes>
        ),
      },
      {
        path: "/managemyfoods",
        loader: () => fetch("https://food-sharing-server-nu.vercel.app/addfoods/available"),
        element: (
          <PrivateRoutes>
            <ManageMyFood></ManageMyFood>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updatefood/:id",
        loader: ({ params }) =>
          fetch(`https://food-sharing-server-nu.vercel.app/addfoods/available/${params.id}`),
        Component: UpdateFood,
      },
    ],
  },
]);
