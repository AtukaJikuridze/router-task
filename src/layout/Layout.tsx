import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { login, logout } from "../redux/AuthSlice";
import "../globalCss.css";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div className="layout">
      <nav className="bg-blue-400 p-4 justify-center flex gap-4">
        <Link to={"/"} className="text-white text-2xl">
          Home
        </Link>
        {user ? (
          <>
            <Link to={"/dashboard"} className="text-white text-2xl">
              Dashboard
            </Link>
            <Link to={"/beers"} className="text-white text-2xl">
              Beers
            </Link>
            <button
              onClick={() => dispatch(logout())}
              className="text-white text-2xl cursor-pointer"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => dispatch(login("avto"))}
            className="text-white text-2xl cursor-pointer"
          >
            Log In
          </button>
        )}
      </nav>
      <main>{children}</main>
    </div>
  );
};
