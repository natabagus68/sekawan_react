import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { Error404 } from "../common/components";
import LoginView from "@features/auth/login-view";
import AdminLayout from "@features/admin/admin-layout/admin-layout";
import TraceabilityView from "@features/admin/traceability/traceability-view";
import TraceabilityDetail from "@features/admin/traceability/traceability-detail";
import { KarangTaruna } from "@features/admin/master-data/karang-taruna/front-page/karang-taruna-view";
import Dashboard from "@features/admin/dashboard/dashboard";
import LeaderBoard from "@features/admin/leaderboard/leaderboard";

const Root = () => {
  return <Outlet />;
};

export default createBrowserRouter([
  {
    path: "",
    element: <Navigate to="../admin" />,
  },
  {
    path: "login",
    element: <LoginView />,
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "traceability",
        element: <Root />,
        children: [
          {
            path: "",
            element: <TraceabilityView />,
          },
          {
            path: "detail",
            element: <TraceabilityDetail />,
          },
        ],
      },
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "leaderboard",
        element: <LeaderBoard />
      },
      {
        path: "master-data",
        element: <Root />,
        children: [
          {
            path: "karang-taruna",
            element: <KarangTaruna />,
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
