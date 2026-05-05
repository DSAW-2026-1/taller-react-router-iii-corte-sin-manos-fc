// pages/Home.jsx
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <p>Bienvenido {user?.name}</p>

      <button onClick={() => navigate("/about")}>Ir a About</button>
      <button onClick={() => { logout(); navigate("/"); }}>
        Cerrar sesión
      </button>
    </div>
  );
}