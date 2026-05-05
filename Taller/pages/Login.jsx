// pages/Login.jsx
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const fakeUser = { name: "Andres" };
    login(fakeUser);
    navigate("/home");
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
}