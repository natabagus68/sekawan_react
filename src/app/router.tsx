import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { Error404 } from "../common/components";
import LoginView from "@features/auth/login-view";
import GeneralView from "@features/admin/dashboard/general/general-view";
import AdminLayout from "@features/admin/admin-layout/admin-layout";
import RealTimeView from "@features/admin/dashboard/real-time/real-time-view";
import DetailsView from "@features/admin/dashboard/details/details-view";
import TraceabilityView from "@features/admin/traceability/traceability-view";
import TraceabilityDetail from "@features/admin/traceability/traceability-detail";
import { KarangTaruna } from "@features/admin/master-data/karang-taruna/front-page/karang-taruna-view";
import { KarangTarunaForm } from "@features/admin/master-data/karang-taruna/form/karang-taruna-form-view";
import { DaftarLokasi } from "@features/admin/master-data/daftar-lokasi/front-page/daftar-lokasi-view";
import { KeanggotaanMasterData } from "@features/admin/master-data/keanggotaan/keanggotaan-view";
import { UserAdmin } from "@features/admin/User/admin/front-page/user-admin-view";
import { UserAdminForm } from "@features/admin/User/admin/form/user-admin-form-view";
import { element } from "prop-types";
import ApprovalLayout from "@features/admin/approval/approval-layout/ApprovalLayout";
import ApprovalTable from "@features/admin/approval/approval-layout/ApprovalTable";
import DetailAcara from "@features/admin/approval/acara/DetailAcara";
import DetailBerita from "@features/admin/approval/berita/DetailBerita";
import DeclinedTable from "@features/admin/approval/declined/DeclinedTable";

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
        path : "approval",
        element : <ApprovalLayout/>,
        children : [
          {
            path : "",
            element : <ApprovalTable/>
          },
          {
            path : 'declined',
            element : <Root/>,
            children : [
              {
                path : "",
                element : <DeclinedTable/>
              }
            ]
          },
          {
            path: ":id/detail-acara",
            element : <DetailAcara/>
          },
          {
            path: ":id/detail-berita",
            element : <DetailBerita/>
          }
        ]
      },
      {
        path: "dashboard",
        element: <Root />,
        children: [
          {
            path: "general",
            element: <GeneralView />,
          },
          {
            path: "details",
            element: <DetailsView />,
          },
          {
            path: "real-time",
            element: <RealTimeView />,
          },
        ],
      },
      {
        path: "master-data",
        element: <Root />,
        children: [
          {
            path: "karang-taruna",
            element: <Root />,
            children: [
              {
                path: "",
                element: <KarangTaruna />,
              },
              {
                path: "form",
                element: <KarangTarunaForm />,
              },
              {
                path: "form/:id",
                element: <KarangTarunaForm />,
              },
            ],
          },
          {
            path: "daftar-lokasi",
            element: <DaftarLokasi />,
          },
          {
            path: "keanggotaan",
            element: <KeanggotaanMasterData />,
          },
        ],
      },
      {
        path: "user",
        element: <Root />,
        children: [
          {
            path: "admin",
            element: <Root />,
            children: [
              {
                path: "",
                element: <UserAdmin />,
              },
              {
                path: "form",
                element: <UserAdminForm />,
              },
              {
                path: ":id/form",
                element: <UserAdminForm />,
              },
            ],
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
