import express, { Request, Response } from "express";
import path from "path";

const app = express();
const PORT = process.env.port || 8000;
const __dirname = path.resolve();

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});

app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"));
});

import mysql from "mysql";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "test",
});

const sqlQuery = "INSERT INTO requested (rowno) VALUES (2)";
//   db.query(sqlQuery, (err, result) => {
//     console.log(err);
//     console.log(result);
//   });
