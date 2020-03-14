-- Drop the tables if they exist
DROP TABLE IF EXISTS admins;
DROP TABLE IF EXISTS facts;
DROP TABLE IF EXISTS episodes;
DROP TABLE IF EXISTS seasons;

-- Create the tables
CREATE TABLE seasons
( id     SERIAL      NOT NULL PRIMARY KEY
, s_num  INT         NOT NULL
);

CREATE TABLE episodes
( id     SERIAL      NOT NULL PRIMARY KEY
, s_id   INT         NOT NULL
, e_num  INT         NOT NULL
, e_name VARCHAR(100) NOT NULL
, e_summ VARCHAR(250)NOT NULL
, FOREIGN KEY (s_id) REFERENCES seasons(id)
);

CREATE TABLE facts
( id     SERIAL      NOT NULL PRIMARY KEY
, e_id   INT         NOT NULL
, f_data VARCHAR(250)NOT NULL
, FOREIGN KEY (e_id) REFERENCES episodes(id)
);

CREATE TABLE admins
( id     SERIAL      NOT NULL PRIMARY KEY
, a_name VARCHAR(30) NOT NULL
, a_pass VARCHAR(250)NOT NULL
);

-- Insert initial values Seasons
INSERT INTO seasons (s_num) VALUES(1);
INSERT INTO seasons (s_num) VALUES(2);
INSERT INTO seasons (s_num) VALUES(3);
INSERT INTO seasons (s_num) VALUES(4);
INSERT INTO seasons (s_num) VALUES(5);
INSERT INTO seasons (s_num) VALUES(6);
INSERT INTO seasons (s_num) VALUES(7);
INSERT INTO seasons (s_num) VALUES(8);

-- Season 1 episodes -15
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (1, 1,'Pilot', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (1, 2,'Spellingg Bee', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (1, 3,'Speak Now or Forever Hold Your Peace', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (1, 4,'Woman Seeking Dead Husband: Smokers Okay, No Pets', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (1, 5,'9 Lives', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (1, 6,'Weekend Warriors', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (1, 7,'Who Ya Gonna Call?', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (1, 8,'Shawn vs. the Red Phantom', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (1, 9,'Forget Me Not', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (1, 10,'From the Earth to the Starbucks', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (1, 11,'He Loves Me, He Loves Me Not, He Loves Me, Oops Hes Dead!', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (1, 12,'Cloudy... With a Chance of Murder', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (1, 13,'Game, Set... Muuurder?', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (1, 14,'Poker? I Barely Know Her', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (1, 15,'Scary Sherry: Biancas Toast', 'Coming Soon...');

-- Season 2 - 16
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (2, 1,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (2, 2,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (2, 3,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (2, 4,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (2, 5,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (2, 6,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (2, 7,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (2, 8,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (2, 9,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (2, 10, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (2, 11, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (2, 12, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (2, 13, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (2, 14, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (2, 15, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (2, 16, 'TBD', 'Coming Soon...');

-- Season 3 - 16
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (3, 1,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (3, 2,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (3, 3,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (3, 4,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (3, 5,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (3, 6,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (3, 7,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (3, 8,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (3, 9,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (3, 10, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (3, 11, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (3, 12, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (3, 13, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (3, 14, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (3, 15, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (3, 16, 'TBD', 'Coming Soon...');

-- Season 4 - 16 
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (4, 1,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (4, 2,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (4, 3,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (4, 4,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (4, 5,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (4, 6,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (4, 7,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (4, 8,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (4, 9,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (4, 10, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (4, 11, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (4, 12, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (4, 13, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (4, 14, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (4, 15, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (4, 16, 'TBD', 'Coming Soon...');

-- Season 5 - 16 
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (5, 1,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (5, 2,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (5, 3,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (5, 4,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (5, 5,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (5, 6,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (5, 7,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (5, 8,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (5, 9,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (5, 10, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (5, 11, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (5, 12, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (5, 13, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (5, 14, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (5, 15, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (5, 16, 'TBD', 'Coming Soon...');

-- Season 6 - 16 
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (6, 1,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (6, 2,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (6, 3,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (6, 4,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (6, 5,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (6, 6,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (6, 7,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (6, 8,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (6, 9,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (6, 10, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (6, 11, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (6, 12, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (6, 13, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (6, 14, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (6, 15, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (6, 16, 'TBD', 'Coming Soon...');

-- Season 7 - 14
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (7, 1,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (7, 2,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (7, 3,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (7, 4,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (7, 5,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (7, 6,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (7, 7,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (7, 8,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (7, 9,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (7, 10, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (7, 11, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (7, 12, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (7, 13, 'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (7, 14, 'TBD', 'Coming Soon...');


-- Season 8 - 10
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (8, 1,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (8, 2,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (8, 3,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (8, 4,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (8, 5,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (8, 6,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (8, 7,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (8, 8,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (8, 9,'TBD', 'Coming Soon...');
INSERT INTO episodes (s_id, e_num, e_name, e_summ) VALUES (8, 10, 'TBD', 'Coming Soon...');
