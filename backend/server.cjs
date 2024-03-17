/* eslint-disable no-undef */
const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("book.sqlite3");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3333;
app.use(bodyParser.json());
app.use(cors());

// Serve Vite output as static files
app.use(express.static(path.join(__dirname, "dist")));

// User registration endpoint
app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  try {
    await db.run("INSERT INTO Users (email, password) VALUES (?, ?)", [
      email,
      password,
    ]);
    res.status(201).json({ message: "Registration successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error during registration" });
  }
});

// User login endpoint
app.post("/api/login", async (req, res) => {
  console.log("API Request:", req.url);
  const getDatabaseUser = (email) => {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM Users WHERE Email = ?", [email], (err, row) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(row);
      });
    });
  };

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  try {
    const user = await getDatabaseUser(email);
    if (user && user.Password === password) {
      console.log("User logged in:", email, password);
      res.status(200).json({ message: "Login successful", email: user.Email });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error during login" });
  }
});

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

// get the rest of science fiction
app.get("/api/science-fiction", (req, res) => {
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
    WHERE Author = "Douglas Adams" OR Author = "Ray Bradbury";`;
  db.all(statement, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// get the rest of romance
app.get("/api/romance", (req, res) => {
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
    WHERE Author = "Audrey Niffeneggar" OR Author = "Casey McQuiston";`;
  db.all(statement, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// get the rest of thriller
app.get("/api/thriller", (req, res) => {
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
    WHERE Author = "Agatha Christie" OR Author = "Daphne du Maurier";`;
  db.all(statement, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// get the count for genre
app.get("/api/genre", (req, res) => {
  console.log("API Request:", req.url);
  const statement = `

    SELECT GenreCounts.Genres, GenreCounts.LikedCount AS MaxLikedCount
    FROM (
        SELECT Books.Genres, COUNT(*) AS LikedCount
        FROM Books
        JOIN SwipeOutput ON Books.BookID = SwipeOutput.BookID
        GROUP BY Books.Genres
    ) AS GenreCounts
    JOIN (
        SELECT MAX(LikedCount) AS MaxLikedCount
        FROM (
            SELECT COUNT(*) AS LikedCount
            FROM Books
            JOIN SwipeOutput ON Books.BookID = SwipeOutput.BookID
            GROUP BY Books.Genres
        ) AS MaxCounts
    ) AS MaxLikedCounts
    ON GenreCounts.LikedCount = MaxLikedCounts.MaxLikedCount;`;

  db.all(statement, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});
// add likedBooks
app.post("/api/likedBooks", async (req, res) => {
  const { Book_id } = req.body;
  try {
    await db.run("INSERT INTO SwipeOutput (Book_id, email) VALUES (?)", [
      Book_id,
      email,
    ]);
    res.status(201).json({ message: "Swiped successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Swiped not successful" });
  }
});

// Get most liked Genres
app.post("/api/likedBooks", async (req, res) => {
  const { Book_id } = req.body;
  try {
    await db.run("INSERT INTO SwipeOutput (Book_id, email) VALUES (?)", [
      Book_id,
      email,
    ]);
    res.status(201).json({ message: "Swiped successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Swiped not successful" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
