
import upload from "../config/multerConfig.js";
import {
  getAllPosts,
  createNewPost,
  uploadImage,
  updatePost
} from "../controllers/postsController.js";

const routes = (app) => {
  app.get("/posts", getAllPosts);

  app.post("/posts", createNewPost);

  app.post("/upload", upload.single("image"), uploadImage);

  app.put("/upload/:id", updatePost);
};

export default routes;
