import { connect, Schema, model } from "mongoose";
import serverless from "serverless-http";

// MongoDB URI Connection String
const MONGODB_URI = `mongodb+srv://nhservices:${encodeURIComponent(
  "mDVarxVc27hHS4."
)}@cluster0.fveujrt.mongodb.net/db?retryWrites=true&w=majority`;

// Connect to MongoDB
connect(MONGODB_URI)
  .then(() => console.log("Connected to your MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Define a schema for testimonials
const testimonialSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  message: { type: String, required: true },
  rating: { type: Number, required: true },
});

// Create a Testimonial model
const Testimonial = model("Testimonial", testimonialSchema);

// Handler function for creating a testimonial
export const createTestimonial = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false; // Prevents function from keeping the connection open

  try {
    const { firstName, lastName, message, rating } = JSON.parse(event.body);
    const testimonial = new Testimonial({
      firstName,
      lastName,
      message,
      rating,
    });
    await testimonial.save();
    return {
      statusCode: 201,
      body: JSON.stringify(testimonial),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: err.message }),
    };
  }
};

// Handler function for getting all testimonials
export const getTestimonials = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false; // Prevents function from keeping the connection open

  try {
    const testimonials = await Testimonial.find();
    return {
      statusCode: 200,
      body: JSON.stringify(testimonials),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: err.message }),
    };
  }
};

// Export the serverless functions
export const handler = serverless({ createTestimonial, getTestimonials });
