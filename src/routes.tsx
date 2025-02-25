import Layout from "./layout/AppLayout";
import About from "./pages/About";
import Home from "./pages/Home";

export const routes = [
  {
    path: "/",
    element: <Layout isVertical={true} />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },
];
