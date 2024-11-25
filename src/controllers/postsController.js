import { getPosts, postNewPost } from "../models/postsModel.js";

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
