import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { AuthProvider } from "./context/AuthContext";

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
