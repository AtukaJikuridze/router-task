import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

import ProtectedRoute from "./ProtectedRoute";

export const routes = [
  {
    path: "/",
    element: <Layout isVertical={true} />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      {
        path: "/about",
        element: <ProtectedRoute />,
        children: [{ path: "/about", element: <About /> }],
      },
    ],
  },
];
