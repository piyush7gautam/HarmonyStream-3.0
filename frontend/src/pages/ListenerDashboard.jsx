import { useEffect, useState } from "react";
import MusicCard from "../components/MusicCard";

export default function ListenerDashboard() {
  const [songs, setSongs] = useState([]);

  // fetch songs
  const fetchMusic = () => {
    fetch("http://localhost:5000/api/listener/music")
      .then(res => res.json())
      .then(data => setSongs(data));
  };

  useEffect(() => {
    fetchMusic();
  }, []);

  // ❤️ LIKE SONG
  const likeSong = async (id) => {
    await fetch(`http://localhost:5000/api/listener/like/${id}`, {
      method: "POST",
    });
    fetchMusic(); // refresh counts
  };

  // 🎧 STREAM SONG
  const streamSong = async (id) => {
    await fetch(`http://localhost:5000/api/listener/stream/${id}`, {
      method: "POST",
    });
    fetchMusic(); // refresh counts
  };

  return (
    <div style={{ padding: "20px", background: "#121212", minHeight: "100vh" }}>
      <h1 style={{ color: "white" }}>🎵 Harmony Stream</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {songs.map(song => (
          <MusicCard
            key={song.id}
            song={song}
            onLike={likeSong}
            onStream={streamSong}
          />
        ))}
      </div>
    </div>
  );
}
