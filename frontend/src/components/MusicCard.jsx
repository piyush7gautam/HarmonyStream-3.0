import { useRef, useState } from "react";

export default function MusicCard({ song, onLike, onStream }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      onStream(song.id); // 🎧 count stream
    }
    setPlaying(!playing);
  };

  return (
    <div style={styles.card}>
      <h3>{song.title}</h3>
      <p>{song.artist}</p>

      <audio ref={audioRef} src={song.audio_url} />

      <button onClick={togglePlay} style={styles.playBtn}>
        {playing ? "⏸ Pause" : "▶ Play"}
      </button>

      <div style={styles.bottom}>
        <button onClick={() => onLike(song.id)} style={styles.likeBtn}>
          ❤️ {song.likes}
        </button>
        <span>🎧 {song.streams}</span>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "#181818",
    color: "white",
    padding: "15px",
    borderRadius: "10px",
    width: "220px",
    margin: "10px",
  },
  playBtn: {
    background: "#1db954",
    border: "none",
    padding: "8px 15px",
    borderRadius: "20px",
    cursor: "pointer",
    color: "black",
    marginBottom: "10px",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  likeBtn: {
    background: "transparent",
    border: "none",
    color: "red",
    cursor: "pointer",
    fontSize: "16px",
  },
};
