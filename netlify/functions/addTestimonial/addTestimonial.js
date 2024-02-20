const { MongoClient } = require("mongodb");

exports.handler = async (event, context) => {
  try {
    // Parse the incoming request body
    const data = JSON.parse(event.body);

    // MongoDB connection URI
    const uri = process.env.MONGODB_URI;

    // Create a new MongoDB client
    const client = new MongoClient(uri);

    // Connect to the MongoDB database
    await client.connect();

    // Access the "testimonials" collection
    const collection = client.db("db").collection("testimonials");

    // Insert the new testimonial into the collection
    const result = await collection.insertOne(data);

    // Retrieve the inserted testimonial
    const insertedTestimonial = await collection.findOne({
      _id: result.insertedId,
    });

    // Close the MongoDB connection
    await client.close();

    // Respond with the inserted testimonial data
    return {
      statusCode: 200,
      body: JSON.stringify(insertedTestimonial),
    };
  } catch (error) {
    // Handle any errors that occur during processing
    console.error("Error:", error);

    // Respond with an error message
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to add testimonial" }),
    };
  }
};
