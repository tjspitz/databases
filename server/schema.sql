DROP DATABASE chat; /* <-- David is clever */

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255),
  PRIMARY KEY(id)
);

/* Create other tables and define schemas for them here! */

-- CREATE TABLE rooms (
--   /* Describe your table here.*/
--   roomId INT(11),
--   userId INT(11)
--   name VARCHAR(255),

--   FOREIGN KEY (userId) REFERENCES (users.userId)
-- );

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  text VARCHAR(255) NOT NULL,
  roomname VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  PRIMARY KEY(id)
);
  -- createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  -- updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

