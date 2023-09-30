import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { Error404 } from "../common/components";
import AdminLayout from "@features/admin/admin-layout/admin-layout";
import { Login } from "@features/auth/login";

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
    children: [],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
