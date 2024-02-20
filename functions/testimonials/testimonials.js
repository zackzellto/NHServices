import { Schema, model } from "mongoose";
import serverless from "serverless-http";
import express from "express";
import cors from "cors";
import { Router } from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const app = express();
app.use(cors());
app.use(bodyParser.json());

const router = Router();

const TestimonialSchema = new Schema({
  firstName: String,
  lastName: String,
  message: String,
  rating: Number,
});
const Testimonial = model("Testimonial", TestimonialSchema);

// Async function to set up MongoDB connection and start server
async function startServer() {
  try {
    await mongoClient.connect();
    const client = mongoClient;
    const db = client.db();
    const collection = db.collection("testimonials");

    // Route handlers
    router.get("/", async (req, res) => {
      try {
        const testimonials = await collection.find().toArray();
        res.json(testimonials);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    router.post("/", async (req, res) => {
      try {
        const testimonial = new Testimonial(req.body);
        await collection.insertOne(testimonial);
        res.json(testimonial);
      } catch (error) {
        console.error("Error adding testimonial:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    app.use("/.netlify/functions/testimonials", router);

    // Start the server
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.error("Error setting up server:", error);
  }
}

// Call the function to start the server
startServer();

export const handler = serverless(app);
