import serverless from "serverless-http";
// Adjust the path according to your project structure
import app from "../../backend/src/index.js";

export const handler = serverless(app);
