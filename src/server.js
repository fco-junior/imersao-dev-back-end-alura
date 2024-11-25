import express from "express";
import routes from "./routes/postsRoutes.js";

const app = express();

routes(app);

app.listen(3333, () => {
  console.log("Server listening...");
});
