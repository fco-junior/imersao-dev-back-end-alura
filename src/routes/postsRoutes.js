import express from "express";
import { getAllPosts, createNewPost } from "../controllers/postsController.js";

const routes = (app) => {
  app.use(express.json());

  app.get("/posts", getAllPosts);

  app.post("/posts", createNewPost);
};

export default routes;
