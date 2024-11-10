import pkg from 'pg';
const { Client } = pkg;

const db = new Client({
  host: "localhost",
  user: "samkons_social_app",
  password: "postgres",
  database: "social_db",
  port: 5432, 
});

db.connect((err) => {
  if (err) {
    console.error("Connection error", err.stack);
  } else {
    console.log("Connected to the database");
  }
});

export default db;