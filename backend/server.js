// const express = require('express');
// const mongodb = require('mongodb');
// const app = express();

// let db; // Define db variable in a higher scope

// // Connection URI
// const uri = 'mongodb://localhost:27017/bookInfo';

// // Connect to MongoDB
// // mongodb.MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
// //     if (err) {
// //         console.error('Error connecting to MongoDB');
// //         console.error(err);
// //         return;
// //     }
// //     console.log('Connected to MongoDB');
// //     // Assign client.db() to the db variable
// //     db = client.db('bookInfo');
// // });

// db = mongodb.MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// // Start the Express server
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

// // Define routes after the database connection is established
// app.get('/bookInfo', (req, res) => {
//     // Check if db is initialized
//     if (!db) {
//         res.status(500).send('Database connection not established');
//         return;
//     }
//     console.log(db);
//         const collection = db('bookInfo').collection('books');
//         collection.find({}).toArray((err, docs) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Error fetching data from database');
//             return;
//         }
//         res.json(docs);
//     });
// });

// // Handle errors
// process.on('unhandledRejection', (err) => {
//     console.error(err);
//     process.exit(1);
// });
// // Close MongoDB connection when the Node.js process exits
// process.on('SIGINT', () => {
//     if (db) {
//         db.close(); // Close the database connection if it's initialized
//     }
//     process.exit();
// });

const express = require("express");
const mongodb = require("mongodb");
const app = express();

let db; // Define db variable in a higher scope

// Connection URI
const uri = "mongodb://localhost:27017/bookInfo";

// Connect to MongoDB
mongodb.MongoClient.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((client) => {
    console.log("Connected to MongoDB");
    // Assign client.db() to the db variable
    db = client.db("bookInfo");

    // Start the Express server after the database connection is established
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB");
    console.error(err);
    process.exit(1);
  });

// Define a function to get the collection
function getBooksCollection() {
  if (!db) {
    throw new Error("Database connection not established");
  }
  return db.collection("books");
}

// Define routes after the database connection is established
app.get("/bookInfo", async (req, res) => {
  try {
    const collection = getBooksCollection();
    const docs = await collection.find({}).toArray();
    res.json(docs);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching data from database");
  }
});

// Handle errors
process.on("unhandledRejection", (err) => {
  console.error(err);
  process.exit(1);
});

// Close MongoDB connection when the Node.js process exits
process.on("SIGINT", () => {
  if (db) {
    db.close(); // Close the database connection if it's initialized
  }
  process.exit();
});
