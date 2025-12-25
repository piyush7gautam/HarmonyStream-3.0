const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Piyush@cr7",
  database: "music_platform"
});
db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected");
});
module.exports = db;