import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root";
import Home from "../pages/home";
import Services from "../pages/services";
import ServiceDetails from "../pages/service-details";
import Blog from "../pages/blog";
import AuthPage from "../pages/authentication";
import MyReviews from "../pages/my-reviews";
import AddServices from "../pages/add-service";

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
        path: "my-reviews",
        element: <MyReviews />,
      },
      {
        path: "add-services",
        element: <AddServices />,
      },
      {
        path: ":type",
        element: <AuthPage />, // this page will handle NO-PAGE-FOUND path
      },
    ],
  },
]);
