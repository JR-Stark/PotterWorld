BEGIN;

-- DROP TABLE IF EXISTS "family";
-- --------------------------------------------
-- table family
-- --------------------------------------------

-- CREATE TABLE IF NOT EXISTS "family" (
--     "id" SERIAL PRIMARY KEY,
--     "name" TEXT NOT NULL,
--     "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
--     "updated_at" TIMESTAMP
-- );

INSERT INTO "family" ("id", "name", "created_at", "updated_at") VALUES
(1, 'Londubat', '2020-08-27 00:05:14.225918', NULL),
(2, 'Potter', '2020-08-27 00:05:14.225918', NULL),
(3, 'Evans', '2020-08-27 00:05:14.225918', NULL),
(4, 'Weasley', '2020-08-27 00:05:14.225918', NULL),
(5, 'Malefoy', '2020-08-27 00:05:14.225918', NULL),
(6, 'Dumbledore', '2020-08-27 00:05:14.225918', NULL),
(7, 'Black', '2020-08-27 00:05:14.225918', NULL),
(8, 'Inconnu', '2020-08-27 17:26:15.401159', NULL);

