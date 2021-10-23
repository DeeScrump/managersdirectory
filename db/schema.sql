DROP DATABASE IF EXISTS orgcharts_db;
CREATE DATABASE orgcharts_db;

USE orgcharts_db;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE reviews (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    movie_id INT,
    review TEXT NOT NULL,
    FOREIGN KEY (movie_id)
    REFERENCES movies(id)
    ON DELETE SET NULL
);