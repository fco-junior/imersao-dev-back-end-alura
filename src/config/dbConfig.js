import { MongoClient } from "mongodb";

export default async function createConnection(connection) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(connection);
    console.log("Connecting to database cluster...");
    await mongoClient.connect();
    console.log("Connected to MongoDB Atlas successfully!");

    return mongoClient;
  } catch (error) {
    console.error("Failed to connect to database!", error);
    process.exit();
  }
}
