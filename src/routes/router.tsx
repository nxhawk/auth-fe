import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import LogInPage from "../pages/LogInPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LogInPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
      ],
    },
  ],
  {
    basename: "/auth-fe",
  },
);

export default router;
