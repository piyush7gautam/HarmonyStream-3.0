import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import LogoutButton from "../components/LogoutButton";

export default function AdminDashboard() {
  const [songs, setSongs] = useState([]);

  const fetchSongs = () => {
    fetch("http://localhost:5000/api/admin/songs")
      .then(res => res.json())
      .then(data => setSongs(data));
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  const approveSong = async (id) => {
    await fetch(`http://localhost:5000/api/admin/approve/${id}`, {
      method: "POST",
    });
    fetchSongs(); // refresh list
  };

  return (
    <div className="flex">
      <Sidebar title="Admin" />

      <div className="p-6 text-white bg-[#121212] min-h-screen w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">👑 Admin – Song Approvals</h2>
          <LogoutButton />
        </div>

        <div className="mt-6 space-y-4">
          {songs.map(song => (
            <div
              key={song.id}
              className="bg-[#181818] p-4 rounded-lg flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">{song.title}</h3>
                <p className="text-sm text-gray-400">{song.artist}</p>
                <p className="text-sm">
                  Status: {song.approved ? "✅ Approved" : "⏳ Pending"}
                </p>
              </div>

              {!song.approved && (
                <button
                  onClick={() => approveSong(song.id)}
                  className="bg-green-500 text-black px-4 py-2 rounded"
                >
                  Approve
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
