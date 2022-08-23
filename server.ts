import express, { application } from "express";
import pool from "./db";

const app = express();

const PORT = 5555;

app.use(express.json());

// get all user data
app.get("/users", (req, res) => {
  pool.query("SELECT * FROM users", (error, results) => {
    if (error) throw error;
    return res.status(200).json(results.rows); //when you use json format, you need to set the middleware (line 8)
  });
});

// get specific user data
app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) throw error;
    return res.status(200).json(results.rows);
  });
});

app.listen(PORT, () => console.log(`Server running @ ${PORT}`));
