import { Pool } from "pg";
import "dotenv/config";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "users",
  password: process.env.PW,
  port: 5432,
});

export default pool;
