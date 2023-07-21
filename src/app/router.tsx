import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { Error404 } from "../common/components";
import AdminLayout from "@features/admin/admin-layout/admin-layout";

const Root = () => {
  return <Outlet />;
};

export default createBrowserRouter([
  {
    path: "",
    element: <Navigate to="../admin" />,
  },

  {
    path: "admin",
    element: <AdminLayout />,
    children: [],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
