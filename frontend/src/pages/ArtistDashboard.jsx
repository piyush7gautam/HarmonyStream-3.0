import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import LogoutButton from "../components/LogoutButton";

export default function ArtistDashboard() {
  const artistId = localStorage.getItem("userId");

  const [songs, setSongs] = useState([]);
  const [title, setTitle] = useState("");
  const [audioUrl, setAudioUrl] = useState("");

  // fetch artist songs
  const fetchSongs = () => {
    fetch(`http://localhost:5000/api/artist/songs/${artistId}`)
      .then(res => res.json())
      .then(data => setSongs(data));
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  // upload song
  const uploadSong = async () => {
    if (!title || !audioUrl) {
      alert("Please fill all fields");
      return;
    }

    await fetch("http://localhost:5000/api/artist/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        artist: "Demo Artist",
        audio_url: audioUrl,
        artist_id: artistId
      })
    });

    setTitle("");
    setAudioUrl("");
    fetchSongs();
  };

  return (
    <div className="flex">
      <Sidebar title="Artist" />

      <div className="p-6 text-white bg-[#121212] min-h-screen w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">🎤 Artist Dashboard</h2>
          <LogoutButton />
        </div>

        {/* Upload Form */}
        <div className="bg-[#181818] p-4 rounded-lg mt-6 w-full max-w-md">
          <h3 className="font-semibold mb-3">Upload New Song</h3>

          <input
            type="text"
            placeholder="Song Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full mb-2 p-2 rounded bg-black text-white"
          />

          <input
            type="text"
            placeholder="Audio URL (e.g. /demo.mp3)"
            value={audioUrl}
            onChange={e => setAudioUrl(e.target.value)}
            className="w-full mb-2 p-2 rounded bg-black text-white"
          />

          <button
            onClick={uploadSong}
            className="bg-green-500 px-4 py-2 rounded text-black font-semibold"
          >
            Upload
          </button>
        </div>

        {/* Uploaded Songs */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-3">My Uploaded Songs</h3>

          {songs.length === 0 && (
            <p className="text-gray-400">No songs uploaded yet</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {songs.map(song => (
              <div key={song.id} className="bg-[#181818] p-4 rounded">
                <h4 className="font-semibold">{song.title}</h4>
                <p className="text-sm text-gray-400">
                  Status: {song.approved ? "✅ Approved" : "⏳ Pending"}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
