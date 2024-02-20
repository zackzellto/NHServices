import { Schema, model } from "mongoose";
import serverless from "serverless-http";
import express from "express";
import cors from "cors";
import { Router } from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";

const mongoClient = new MongoClient(process.env.MONGODB_URI);

// Reusable connection pool
let clientPromise;

(async () => {
  await mongoClient.connect();
  clientPromise = Promise.resolve(mongoClient);
})();

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

router.get("/", async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("testimonials");
    const testimonials = await collection.find().toArray();
    res.json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("testimonials");
    const testimonial = new Testimonial(req.body);
    await collection.insertOne(testimonial);
    res.json(testimonial);
  } catch (error) {
    console.error("Error adding testimonial:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.use("/.netlify/functions/testimonials", router);

export const handler = serverless(app);
