-- Create schemas

-- Create tables
CREATE TABLE IF NOT EXISTS designs
(
    id VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    src VARCHAR(255),
    PRIMARY KEY(id)
);