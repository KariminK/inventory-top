import { Pool } from "pg";
import pool from "../db/pool";
import { skin } from "../types";

class Model {
  db: Pool;
  constructor(db: Pool) {
    this.db = db;
  }
  async get(id?: number | string) {
    if (id)
      return await this.db.query("SELECT * FROM skin WHERE id = $1;", [id]);
    else return await this.db.query("SELECT * FROM skin ORDER BY skin.id;");
  }
  async add(skin: skin) {
    return this.db.query(
      "INSERT INTO skin (weapon, name, quality, collection, photo_url) VALUES($1, $2, $3, $4, $5);",
      [skin.weapon, skin.name, skin.quality, skin.collection, skin.photo_url]
    );
  }
  async update(id: number | string, skin: skin) {
    return await this.db.query(
      "UPDATE skin SET weapon = $1, name = $2, quality = $3, collection = $4, photo_url = $5 WHERE id = $6;",
      [
        skin.weapon,
        skin.name,
        skin.quality,
        skin.collection,
        skin.photo_url,
        id,
      ]
    );
  }
  async deleteSkin(id: number | string) {
    return await this.db.query("DELETE FROM skin WHERE id = $1;", [id]);
  }
}

export default new Model(pool);
