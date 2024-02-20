const { MongoClient } = require("mongodb");

exports.handler = async (event, context) => {
  // context.callbackWaitsForEmptyEventLoop = false ensures that the function
  // responds immediately without waiting for the Node.js event loop to empty.
  context.callbackWaitsForEmptyEventLoop = false;

  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const collection = client.db().collection("testimonials");
    const testimonials = await collection.find().toArray();

    return {
      statusCode: 200,
      body: JSON.stringify(testimonials),
    };
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  } finally {
    // Close the connection to the MongoDB server
    await client.close();
  }
};
