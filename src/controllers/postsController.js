import fs from "fs";
import { getPosts, postNewPost, putPost } from "../models/postsModel.js";

export async function getAllPosts(req, res) {
  const posts = await getPosts();
  res.status(200).json(posts);
}

export async function createNewPost(req, res) {
  const newPost = req.body;
  try {
    const response = await postNewPost(newPost);
    res.status(201).json(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ Error: "Request failed" });
  }
}

export async function uploadImage(req, res) {
  const newPost = {
    description: "",
    imageUrl: req.file.originalname,
    alt: ""
  };

  try {
    const response = await postNewPost(newPost);
    const imageUrlUpdated = `uploads/${response.insertedId}.png`;
    fs.renameSync(req.file.path, imageUrlUpdated);
    res.status(201).json(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ Error: "Request failed" });
  }
}

export async function updatePost(req, res) {
  const id = req.params.id;
  const imageUrl = `http://localhost:3333/${id}.png`;
  const post = {
    imageUrl,
    description: req.body.description,
    alt: req.body.alt
  };

  try {
    const response = await putPost(id, post);
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ Error: "Request failed" });
  }
}
