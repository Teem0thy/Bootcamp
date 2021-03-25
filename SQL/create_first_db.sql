#create database world;

use world;

CREATE TABLE IF NOT EXISTS Artists
(
    pkArtistId INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Name NVARCHAR(120) NULL);
    
    #insert into Artists(Name) values("Second Artist")
