import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import ProtectedRoute from "./ProtectedRoute";
import DrinksPage from "./pages/DrinkPage/DrinkPage";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/beers" element={<DrinksPage />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default MyRoutes;
