import { useDispatch } from "react-redux";
import { login } from "../../redux/AuthSlice";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logIn = () => {
    dispatch(login("Avto"));
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to the App</h1>
        <p className="text-gray-600 mb-6">Please log in to continue.</p>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-600 transition"
          onClick={logIn}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
