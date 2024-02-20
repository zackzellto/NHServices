/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const { json } = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// MongoDB URI
const MONGODB_URI = `mongodb+srv://nhservices:${encodeURIComponent(
  "mDVarxVc27hHS4."
)}@cluster0.fveujrt.mongodb.net/db?retryWrites=true&w=majority`;

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Define a schema for testimonials
const testimonialSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  message: String,
  rating: Number,
});

// Create a Testimonial model
const Testimonial = mongoose.model("Testimonial", testimonialSchema);

// Middleware to parse JSON request bodies
app.use(json());
app.use(cors());

// Create a testimonial
app.post("/testimonials", async (req, res) => {
  const { firstName, lastName, message, rating } = req.body;
  try {
    const testimonial = new Testimonial({
      firstName,
      lastName,
      message,
      rating,
    });
    await testimonial.save();
    res.status(201).json(testimonial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all testimonials
app.get("/testimonials", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = app;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
