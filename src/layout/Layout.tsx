import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface INav {
  isVertical: boolean;
}

const Layout: React.FC<INav> = ({ isVertical }) => {
  const { user, logout } = useAuth();

  return (
    <div>
      <nav
        className={`px-10 py-5 bg-blue-400 ${
          isVertical
            ? "flex justify-between"
            : "flex flex-col items-center gap-4"
        }`}
      >
        <div>
          <h1 className="font-bold text-2xl">Logo</h1>
        </div>
        <div>
          <Link to="/" className="text-lg text-white">
            Home
          </Link>

          {user ? (
            <Link to="/about" className="text-lg text-white ml-5">
              About
            </Link>
          ) : null}
        </div>
        <div>
          {user ? (
            <button onClick={logout} className="text-lg text-white">
              Log Out
            </button>
          ) : (
            <Link to="/login" className="text-lg text-white">
              Log In
            </Link>
          )}
        </div>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
