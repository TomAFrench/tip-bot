CREATE DATABASE IF NOT EXISTS tips;
USE tips;
CREATE TABLE IF NOT EXISTS balances (name VARCHAR(64), address VARCHAR(64), balance VARCHAR(64), notify tinyint(1));