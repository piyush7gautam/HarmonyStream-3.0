const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;
  const hash = await bcrypt.hash(password, 10);
  db.query("INSERT INTO users VALUES (NULL,?,?,?,?)",
    [name, email, hash, role],
    () => res.json({ message: "Registered Successfully" })
  );
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  db.query("SELECT * FROM users WHERE email=?", [email], async (err, r) => {
    if (r.length === 0) return res.status(401).json("Invalid");
    const ok = await bcrypt.compare(password, r[0].password);
    if (!ok) return res.status(401).json("Invalid");
    res.json({ role: r[0].role, userId: r[0].id });
  });
});
module.exports = router;

