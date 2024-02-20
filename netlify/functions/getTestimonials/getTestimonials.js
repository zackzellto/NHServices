const { MongoClient } = require("mongodb");

exports.handler = async (event, context) => {
  try {
    // MongoDB connection URI
    const uri = process.env.MONGODB_URI;

    // Create a new MongoDB client
    const client = new MongoClient(uri);

    // Connect to the MongoDB database
    await client.connect();

    // Access the "testimonials" collection
    const collection = client.db("db").collection("testimonials");

    // Query the collection to retrieve all testimonials
    const testimonials = await collection.find().toArray();

    // Close the MongoDB connection
    await client.close();

    // Respond with the retrieved testimonials
    return {
      statusCode: 200,
      body: JSON.stringify(testimonials),
    };
  } catch (error) {
    // Handle any errors that occur during processing
    console.error("Error:", error);

    // Respond with an error message
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch testimonials" }),
    };
  }
};
