import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ListenerDashboard from "./pages/ListenerDashboard";
import ArtistDashboard from "./pages/ArtistDashboard";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listener" element={<ListenerDashboard />} />
        <Route path="/artist" element={<ArtistDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
