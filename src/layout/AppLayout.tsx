import { Link, Outlet } from "react-router-dom";
interface INav {
  isVertical: boolean;
}
const Layout: React.FC<INav> = ({ isVertical }) => {
  return (
    <div>
      <nav
        className={`  px-10 py-5 bg-blue-400 ${
          isVertical
            ? "flex justify-between"
            : "flex flex-col items-center gap-4"
        } `}
      >
        <div>
          <h1 className="font-bold text-2xl">Logo</h1>
        </div>
        <div>
          {" "}
          <Link to="/" className="text-lg text-white">
            Home
          </Link>{" "}
          <Link to="/about" className="text-lg text-white ml-5">
            About
          </Link>{" "}
        </div>
        <div>
          <h2 className="text-lg ">Log Out</h2>
        </div>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};
export default Layout;
