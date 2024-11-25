import createConnection from "../config/dbConfig.js";

const connection = await createConnection(process.env.DB_CONNECTION);

export default async function getPosts() {
  const collection = await connection.db("alura-imersion-dev-back-end").collection("posts");
  return collection.find().toArray();
};
