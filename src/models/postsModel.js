import { ObjectId } from "mongodb";
import createConnection from "../config/dbConfig.js";

const connection = await createConnection(process.env.DB_CONNECTION);
const db = await connection.db("alura-imersion-dev-back-end");
const collection = await db.collection("posts");

export async function getPosts() {
  return collection.find().toArray();
}

export async function postNewPost(newPost) {
  return collection.insertOne(newPost);
}

export async function putPost(id, post) {
  const objectId = ObjectId.createFromHexString(id);
  return collection.updateOne({ _id: new ObjectId(objectId) }, { $set: post });
}
