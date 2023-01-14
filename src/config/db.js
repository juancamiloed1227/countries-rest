import dotenv from 'dotenv';
dotenv.config()

const db = {
    host: process.env.DB_HOST, // Hostname
    user: process.env.DB_USER, // Username
    password: process.env.DB_PASSWORD, // Password
    database: process.env.DB_DATABASE // Database name
};

export default db;