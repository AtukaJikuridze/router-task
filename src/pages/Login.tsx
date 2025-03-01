import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Login Page</h1>
      <button
        onClick={handleLogin}
        className="mt-5 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Log In
      </button>
    </div>
  );
};

export default Login;
