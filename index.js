const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = process.env.port || 8000;
const path = require("path");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "test",
});

app.use(express.static(path.join(__dirname, "react-project/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/react-project/build/index.html"));
  //   const sqlQuery = "INSERT INTO requested (rowno) VALUES (2)";
  //   db.query(sqlQuery, (err, result) => {
  //     console.log(err);
  //     console.log(result);
  //   });
  //   res.send("123!");
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
