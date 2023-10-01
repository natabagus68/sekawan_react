import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { Error404 } from "../common/components";
import AdminLayout from "@features/admin/admin-layout/admin-layout";
import { Login } from "@features/auth/login";
import { Overview } from "@features/admin/overview/overview";
import { Tiket } from "@features/admin/tiket/tiket/tiket";

const Root = () => {
  return <Outlet />;
};

export default createBrowserRouter([
  {
    path: "",
    element: <Navigate to="../login" />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "tiket",
        element: <Root />,
        children: [
          {
            path: "",
            element: <Tiket />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
