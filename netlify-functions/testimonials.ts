import express, { Request, Response } from "express";
import serverless from "serverless-http";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

// MongoDB URI Connection String
const MONGODB_URI = `mongodb+srv://nhservices:${encodeURIComponent(
  "mDVarxVc27hHS4."
)}@cluster0.fveujrt.mongodb.net/db?retryWrites=true&w=majority`;

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to your MongoDB"))
  .catch((err: Error) => console.error("Failed to connect to MongoDB", err));

// Define a schema for testimonials
interface ITestimonial {
  firstName: string;
  lastName: string;
  message: string;
  rating: number;
}

const testimonialSchema = new mongoose.Schema<ITestimonial>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  message: { type: String, required: true },
  rating: { type: Number, required: true },
});

// Create a Testimonial model
const Testimonial = mongoose.model<ITestimonial>(
  "Testimonial",
  testimonialSchema
);

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());

// Create a testimonial
app.post("/testimonials", async (req: Request, res: Response) => {
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
    res.status(400).json({ message: (err as Error).message });
  }
});

// Get all testimonials
app.get("/testimonials", async (req: Request, res: Response) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

// Wrap the Express app with serverless-http
export const handler = serverless(app);
