import getPosts from "../models/postsModel.js";

export default async function getAllPosts(req, res) {
  const posts = await getPosts();
  res.status(200).json(posts);
};
