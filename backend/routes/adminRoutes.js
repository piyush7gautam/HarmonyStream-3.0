const express = require("express");
const db = require("../db");
const router = express.Router();

// 👑 Admin: get all songs (pending + approved)
router.get("/songs", (req, res) => {
  db.query("SELECT * FROM music", (err, result) => {
    res.json(result);
  });
});

// 👑 Admin: approve a song
router.post("/approve/:id", (req, res) => {
  db.query(
    "UPDATE music SET approved = 1 WHERE id = ?",
    [req.params.id],
    () => res.json({ message: "Song approved" })
  );
});

module.exports = router;
