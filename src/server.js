import express from "express";
import cors from "cors";
import routes from "./routes/postsRoutes.js";
import corsOptions from "./config/corsConfig.js";

const app = express();
app.use(express.static("uploads"));
app.use(express.json());
app.use(cors(corsOptions));
routes(app);

app.listen(3333, () => {
  console.log("Server listening...");
});
