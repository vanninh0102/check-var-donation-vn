import pkg from "pg";
import * as fs from "fs";
// Replace with your PostgreSQL connection details
const { Pool } = pkg;
const pool = new Pool({
  host: "localhost",
  port: 5432, // Default PostgreSQL port
  user: "postgres",
  password: "ninh",
  database: "donation",
});

async function loadAndInsertData() {
  try {
    // Load JSON data from file
    const jsonData = JSON.parse(fs.readFileSync("transactions.json", "utf-8")); // Replace 'your_json_file.json' with your file path

    // Connect to the database
    const client = await pool.connect();

    // Loop through each object in the JSON array
    for (const obj of jsonData) {
      // Prepare the SQL query for insertion
      const query = `
        INSERT INTO transactions (date, raw, money, note, code) 
        VALUES ($1, $2, $3, $4, $5)
      `; // Replace 'your_table' with your table name

      // Execute the query with the object's values
      await client.query(query, [
        obj.date,
        obj.raw,
        obj.money,
        obj.note,
        obj.code,
      ]);
    }

    // Commit the transaction and release the client
    await client.query("COMMIT");
    client.release();

    console.log("Data loaded and inserted successfully!");
  } catch (err) {
    console.error("Error loading or inserting data:", err);
  } finally {
    // Ensure the pool is closed when done
    await pool.end();
  }
}

loadAndInsertData();
