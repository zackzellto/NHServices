const express = require("express");
const { json } = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();

// MongoDB URI Connection String
const MONGODB_URI = `mongodb+srv://nhservices:${encodeURIComponent(
  "mDVarxVc27hHS4."
)}@cluster0.fveujrt.mongodb.net/db?retryWrites=true&w=majority`;

// Connect to MongoDB
const client = new MongoClient(MONGODB_URI);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

connectToDatabase();

// Define a collection for testimonials
let testimonialsCollection;

async function getTestimonialsCollection() {
  if (!testimonialsCollection) {
    testimonialsCollection = client.db().collection("testimonials");
  }
  return testimonialsCollection;
}

// Middleware to parse JSON request bodies
app.use(json());
app.use(cors());

// Create a testimonial
app.post("/testimonials", async (req, res) => {
  const { firstName, lastName, message, rating } = req.body;
  try {
    const collection = await getTestimonialsCollection();
    const testimonial = {
      firstName,
      lastName,
      message,
      rating,
    };
    const result = await collection.insertOne(testimonial);
    res.status(201).json(result.ops[0]);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all testimonials
app.get("/testimonials", async (req, res) => {
  try {
    const collection = await getTestimonialsCollection();
    const testimonials = await collection.find().toArray();
    res.status(200).json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Close the database connection when the server is shutting down
process.on("SIGINT", async () => {
  await client.close();
  console.log("MongoDB connection closed");
  process.exit();
});

module.exports = app;
