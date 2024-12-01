import { Pool } from "pg";
import pool from "../db/pool";
import { skin } from "../types";

class Model {
  db: Pool;
  constructor(db: Pool) {
    this.db = db;
  }
  async get(id: number) {
    if (id)
      return await this.db.query("SELECT * FROM skin WHERE id = $1", [id]);
    else return await this.db.query("SELECT * FROM skin");
  }
  async add(skin: skin) {
    return this.db.query(
      "INSERT INTO skin (weapon, name, quality, collection) VALUES($1, $2, $3, $4)",
      [skin.weapon, skin.name, skin.quality, skin.collection]
    );
  }
  // TODO: dodac handler dla update i delete
}

export default new Model(pool);
