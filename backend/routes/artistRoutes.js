const express = require("express");
const db = require("../db");
const router = express.Router();

// 🎤 Artist uploads a song (default approved = 0)
router.post("/upload", (req, res) => {
  const { title, artist, audio_url, artist_id } = req.body;

  db.query(
    "INSERT INTO music (title, artist, audio_url, artist_id, approved) VALUES (?,?,?,?,0)",
    [title, artist, audio_url, artist_id],
    () => {
      res.json({
        message: "Song uploaded successfully (waiting for admin approval)"
      });
    }
  );
});

// 🎤 Artist views their own songs
router.get("/songs/:artistId", (req, res) => {
  db.query(
    "SELECT * FROM music WHERE artist_id = ?",
    [req.params.artistId],
    (err, result) => {
      res.json(result);
    }
  );
});

module.exports = router;
