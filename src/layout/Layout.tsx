import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../globalCss.css";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { user, logout, login } = useAuth();

  return (
    <div className="layout">
      <nav className="bg-blue-400 p-4 justify-center flex gap-4">
        <Link to={"/"} className="text-white text-2xl" >Home</Link>
        {user ? (
          <>
            <Link to={"/dashboard"} className="text-white text-2xl" >Dashboard</Link>
            <button onClick={() => logout()}className="text-white text-2xl cursor-pointer" >Logout</button>
          </>
        ) : (
          <button
            onClick={() => {
              login("avto");
            }}
          className="text-white text-2xl cursor-pointer" >
            Log In
          </button>
        )}
      </nav>
      <main>{children}</main>
    </div>
  );
};
