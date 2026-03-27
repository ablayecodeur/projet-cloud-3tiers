CREATE DATABASE appdb;
CREATE USER 'appuser'@'%' IDENTIFIED BY 'password123';
GRANT ALL PRIVILEGES ON appdb.* TO 'appuser'@'%';
FLUSH PRIVILEGES;
USE appdb;
CREATE TABLE fruits (id INT AUTO_INCREMENT PRIMARY KEY, nom VARCHAR(50));
INSERT INTO fruits (nom) VALUES ('Pomme Cloud'), ('Banane Virtuelle');