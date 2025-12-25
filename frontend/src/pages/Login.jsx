import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("LISTENER");

  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      alert("Invalid credentials");
      return;
    }

    const data = await res.json();

    // store role in localStorage
    localStorage.setItem("role", data.role);

    // redirect based on role
    if (data.role === "LISTENER") navigate("/listener");
    if (data.role === "ARTIST") navigate("/artist");
    if (data.role === "ADMIN") navigate("/admin");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="bg-zinc-900 p-10 rounded-xl w-96 text-center">
        <h1 className="text-3xl font-bold text-green-500 mb-6">
          Harmony Stream
        </h1>

        <input
          className="w-full mb-3 p-2 rounded bg-zinc-800 text-white"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-3 p-2 rounded bg-zinc-800 text-white"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          className="w-full mb-4 p-2 rounded bg-zinc-800 text-white"
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="LISTENER">Listener</option>
          <option value="ARTIST">Artist</option>
          <option value="ADMIN">Admin</option>
        </select>

        <button
          onClick={handleLogin}
          className="w-full bg-green-500 text-black py-2 rounded font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
}
