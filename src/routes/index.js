import LayoutDefault from "../Layout/LayoutDefault";
import Dashboard from "../pages/Dashboard";
import ManageKPI from "../pages/ManageKPI";
import Setting from "../pages/Setting";
import Tracking from "../pages/Tracking";
import Info from "../pages/Info";
import Register from "../pages/Register";
import LoginForm from "../pages/Login";
import Canlendar from "../pages/Canlendar";

export const routes = [
  {
    path: '/',
    element: <Info />,
  },  
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "manage-kpi",
        element: <ManageKPI />
      },
      {
        path: "tracking",
        element: <Tracking />
      },
      {
        path: "setting",
        element: <Setting />
      },
      {
        path: "canlendar",
        element: <Canlendar />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginForm />
  },
  {
    path: "/register",
    element: <Register />
  }
]