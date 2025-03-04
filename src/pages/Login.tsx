import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="Login"
        onClick={() => {
          login("user123");
          navigate("/");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
