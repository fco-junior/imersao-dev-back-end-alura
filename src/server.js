import express from "express";

const app = express();

app.listen(3333, () => {
  console.log("Server listening...");
});

app.get("/", (req, res) => {
  res.status(200).send("Imersão Dev Back-end Alura!");
});