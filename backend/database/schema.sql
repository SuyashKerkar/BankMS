-- create database bank;
-- use bank;

-- CREATE TABLE Users (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(100) NOT NULL,
--     email VARCHAR(100) UNIQUE NOT NULL,
--     password VARCHAR(255) NOT NULL,
--     role ENUM('customer', 'banker') NOT NULL,
--     token varchar(1000)
-- );

-- CREATE TABLE Accounts (
--     user_id INT primary key,
--     balance DECIMAL(10,2) DEFAULT 0.00,
--     FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
-- );

-- CREATE TABLE Transactions (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     type ENUM('deposit', 'withdrawal') NOT NULL,
--     amount DECIMAL(10,2) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
-- );