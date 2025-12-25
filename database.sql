CREATE DATABASE music_platform;
USE music_platform;

CREATE TABLE users(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100),
password VARCHAR(255),
role ENUM('ADMIN','ARTIST','LISTENER')
);

CREATE TABLE music(
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(100),
genre VARCHAR(50),
artist_id INT,
streams INT DEFAULT 0,
likes INT DEFAULT 0,
approved BOOLEAN DEFAULT 0
);

CREATE TABLE listening_history(
user_id INT,
music_id INT
);