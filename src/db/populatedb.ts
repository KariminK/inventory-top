import { Client } from "pg";
import { configDotenv } from "dotenv";

configDotenv();
const client = new Client({
  connectionString: process.env.DB_CONNECTION_STRING,
});

const structure = `
CREATE TYPE skin_quality AS ENUM (
'Battle-Scared',
'Well-Worn',
'Field-Tested', 
'Minimal Wear', 
'Factory New'
);

CREATE TABLE skin(
    weapon varchar(20),
    name varchar(50),
    quality skin_quality,
    collection varchar(50)
);
`;

async function populateDb() {
  try {
    await client.connect();
    await client.query(structure);
    console.log("Database populated successfully");
  } catch (error) {
    console.log("Error while populating db: ", error);
  } finally {
    await client.end();
  }
}
populateDb();
