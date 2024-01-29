import pg from "pg";
import env from "dotenv"

const db = new pg.Client({
    database: process.env.db_name,
    host: process.env.db_host,
    user: process.env.db_username,
    password: process.env.db_password,
    port: process.env.db_port,
});

// Connect to the database
db.connect();

// Function to get all entries from the database
async function getEntries() {
    try {
        const result = await db.query("SELECT * FROM entries;");
        return result.rows;
    } catch (err) {
        console.log("Something went wrong:", err.stack);
    }
}

// Function to get a list of entry dates from the database
async function entryList() {
    try {
        const result = await db.query("SELECT date FROM entries;");
        return result.rows.map(row => row.date);
    } catch (err) {
        console.log("Something went wrong:", err.stack);
    }
}

// Function to get a specific entry based on date
async function getCurrentEntry(currentEntry) {
    try {
        const result = await db.query("SELECT * FROM entries WHERE date = $1", [currentEntry]);
        return result.rows[0]; // Assuming there's only one entry per date
    } catch (err) {
        console.log("Something went wrong:", err.stack);
    }
}

// Function to set the current entry date
function setCurrentEntry(date) {
    currentEntry = date
}

// Export the functions
export { getEntries, entryList, getCurrentEntry, setCurrentEntry };
