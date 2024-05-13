import LayoutDefault from "../Layout/LayoutDefault";
import Dashboard from "../pages/Dashboard";
import ManageKPI from "../pages/ManageKPI";
import Setting from "../pages/Setting";
import Tracking from "../pages/Tracking";
import Index from "../pages/Index";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/manage-kpi",
        element: <ManageKPI />
      },
      {
        path: "/tracking",
        element: <Tracking />
      },
      {
        path: "/setting",
        element: <Setting />
      }
    ]
  }
]