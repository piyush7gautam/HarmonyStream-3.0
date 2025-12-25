const express = require("express");
const db = require("../db");
const router = express.Router();

// get all music
router.get("/music", (req, res) => {
  db.query(
    "SELECT * FROM music WHERE approved = 1",
    (err, result) => res.json(result)
  );
});


// increase stream count
router.post("/stream/:id", (req, res) => {
  db.query(
    "UPDATE music SET streams = streams + 1 WHERE id = ?",
    [req.params.id],
    () => res.json({ message: "Stream counted" })
  );
});

// like a song
router.post("/like/:id", (req, res) => {
  db.query(
    "UPDATE music SET likes = likes + 1 WHERE id = ?",
    [req.params.id],
    () => res.json({ message: "Liked" })
  );
});

module.exports = router;
