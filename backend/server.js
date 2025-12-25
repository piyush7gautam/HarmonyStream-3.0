const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const artistRoutes = require("./routes/artistRoutes");
const listenerRoutes = require("./routes/listenerRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/artist", artistRoutes);
app.use("/api/listener", listenerRoutes);

app.listen(5000, () => console.log("Harmony Stream COMPLETE backend running"));