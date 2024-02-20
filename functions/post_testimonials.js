const { MongoClient } = require("mongodb");

// Simple validation function
const validateTestimonial = (data) => {
  const { firstName, lastName, message, rating } = data;
  if (!firstName || typeof firstName !== "string") return false;
  if (!lastName || typeof lastName !== "string") return false;
  if (!message || typeof message !== "string") return false;
  if (typeof rating !== "number" || rating < 0 || rating > 5) return false;
  return true;
};

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const data = JSON.parse(event.body);

    // Validate the testimonial data
    if (!validateTestimonial(data)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid testimonial data" }),
      };
    }

    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    const collection = client.db().collection("testimonials");
    const result = await collection.insertOne(data);

    return {
      statusCode: 200,
      body: JSON.stringify(result.ops[0]),
    };
  } catch (error) {
    console.error("Error adding testimonial:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  } finally {
    await client.close();
  }
};
