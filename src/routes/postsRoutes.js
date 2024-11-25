import express from "express";
import upload from "../config/multerConfig.js";
import {
  getAllPosts,
  createNewPost,
  uploadImage
} from "../controllers/postsController.js";

const routes = (app) => {
  app.use(express.json());

  app.get("/posts", getAllPosts);

  app.post("/posts", createNewPost);

  app.post("/upload", upload.single("image"), uploadImage);
};

export default routes;
