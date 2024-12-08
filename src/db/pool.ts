import { Pool } from "pg";
import { configDotenv } from "dotenv";
configDotenv();

export default new Pool({
  connectionString: process.env.DB_CONNECTION_STRING,
  ssl: true,
});
