import LayoutDefault from "../Layout/LayoutDefault";
import Dashboard from "../pages/Dashboard";
import ManageKPI from "../pages/ManageKPI";
import Setting from "../pages/Setting";
import Tracking from "../pages/Tracking";
import Index from "../pages/Index";
import Register from "../pages/Register";
import LoginForm from "../pages/Login";

export const routes = [
  {
    path: '/',
    element: <Index />,
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