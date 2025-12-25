import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <button
      onClick={logout}
      className="bg-red-500 text-black px-4 py-1 rounded font-semibold"
    >
      Logout
    </button>
  );
}
