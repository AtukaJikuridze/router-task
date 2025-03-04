import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../globalCss.css";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { user, logout, login } = useAuth();

  return (
    <div className="layout">
      <nav>
        <Link to={"/"}>Home</Link>
        {user ? (
          <>
            <Link to={"/dashboard"}>Dashboard</Link>
            <button onClick={() => logout()}>Logout</button>
          </>
        ) : (
          <button
            onClick={() => {
              login("avto");
            }}
          >
            Log In
          </button>
        )}
      </nav>
      <main>{children}</main>
    </div>
  );
};
