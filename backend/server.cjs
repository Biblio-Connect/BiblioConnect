/* eslint-disable no-undef */
const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("book.sqlite3");

const app = express();
const PORT = process.env.PORT || 3333;

// Serve Vite output as static files
app.use(express.static(path.join(__dirname, "dist")));

// get all the initial books
app.get("/api/items", (req, res) => {
  console.log("API Request:", req.url);
  const statement = `
  SELECT
    ImageURL, 
    Name, 
    Author,
    Genres,
    Chapters, 
    Description
  FROM Books LIMIT 12;`;
  db.all(statement, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// get the rest of fantasy
app.get("/api/fantasy", (req, res) => {
    console.log("API Request:", req.url);
    const statement = `
    SELECT 
        ImageURL, 
        Name, 
        Author,
        Genres,
        Chapters, 
        Description
    FROM Books
    WHERE Author = "C.S. Lewis" OR Author = "Michael Ende";`;
    db.all(statement, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows);
    });
  });
  

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

