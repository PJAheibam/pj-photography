import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root";
import Home from "../pages/home";
import Services from "../pages/services";
import ServiceDetails from "../pages/service-details";
import Blog from "../pages/blog";
import AuthPage from "../pages/authentication";
import MyReviews from "../pages/my-reviews";
import AddServices from "../pages/add-service";
import PrivateRoute from "./private-route";
import Article from "../pages/article";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "services/:id",
        element: <ServiceDetails />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:id",
        element: <Article />,
      },
      {
        path: "my-reviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "add-services",
        element: (
          <PrivateRoute>
            <AddServices />
          </PrivateRoute>
        ),
      },
      {
        path: ":type",
        element: <AuthPage />, // this page will handle NO-PAGE-FOUND path
      },
    ],
  },
]);
