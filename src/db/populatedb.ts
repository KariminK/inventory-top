import { Client } from "pg";
import { configDotenv } from "dotenv";

configDotenv();
const client = new Client({
  connectionString: process.env.DB_CONNECTION_STRING,
  ssl: true,
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
    id SERIAL PRIMARY KEY,
    weapon varchar(20),
    name varchar(50),
    quality skin_quality,
    collection varchar(50),
    photo_url varchar(400)
);
INSERT INTO skin (weapon, name, quality, collection, photo_url) VALUES
('AWP', 'Dragon Lore', 'Field-Tested','The Cobblestone collection', 'https://community.fastly.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH-t26q4SZlvD7PYTQgXtu5Mx2gv2PrdSijAWwqkVtN272JIGdJw46YVrYqVO3xLy-gJC9u5vByCBh6ygi7WGdwUKTYdRD8A/360fx360f'),
('AK-47', 'Vulkan', 'Minimal Wear','Weapon Case 1', 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj5Nr_Yg2Yf6cR02LmS9tn3ilK1qBVkMGzyIICRdgRvYVCDqwTsyO7n1JTo6M7PwGwj5Hei-fvc4A/360fx360f'),
('M4A4', 'Temukau', 'Factory New','UwU Collection','https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW08izmZWAluLLPr7Vn35cppd0ieySoYqm21Xm80pvNT2mJNOUdQ84aFCC-QK_xu6515LuvpzMyXB9-n51uVO39f4/360fx360f'), 
('AWP', 'Dragon Lore', 'Field-Tested','The Cobblestone collection', 'https://community.fastly.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH-t26q4SZlvD7PYTQgXtu5Mx2gv2PrdSijAWwqkVtN272JIGdJw46YVrYqVO3xLy-gJC9u5vByCBh6ygi7WGdwUKTYdRD8A/360fx360f'),
('AK-47', 'Vulkan', 'Minimal Wear','Weapon Case 1', 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj5Nr_Yg2Yf6cR02LmS9tn3ilK1qBVkMGzyIICRdgRvYVCDqwTsyO7n1JTo6M7PwGwj5Hei-fvc4A/360fx360f'),
('M4A4', 'Temukau', 'Factory New','UwU Collection','https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW08izmZWAluLLPr7Vn35cppd0ieySoYqm21Xm80pvNT2mJNOUdQ84aFCC-QK_xu6515LuvpzMyXB9-n51uVO39f4/360fx360f');
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
