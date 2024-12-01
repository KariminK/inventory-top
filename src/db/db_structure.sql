CREATE TYPE skin_quality AS ENUM (
'Battle-Scared',
'Well-Worn',
'Field-Tested', 
'Minimal Wear', 
'Factory New'
);

CREATE TABLE IF NOT EXISTS skin(
    weapon varchar(20),
    name varchar(50),
    quality skin_quality,
    collection varchar(50)
);
