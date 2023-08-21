import express, { Request, Response } from "express";
import mysql from "mysql";
import path from "path";

const app = express();
const PORT = process.env.port || 8000;

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});

app.use(express.static(path.join(__dirname, "frontend/build")));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "test",
});
app.get("/insert", (req: Request, res: Response) => {
  const sqlQuery = "INSERT INTO requested (rowno) VALUES (3)";
  db.query(sqlQuery, (err, result) => {
    console.log(err);
    console.log(result);
  });
  res.send("success");
});

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"));
});
