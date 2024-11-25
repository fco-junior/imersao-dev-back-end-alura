import express from "express";

const posts = [
  {
    id: 1,
    description: "A test photo of a cat 1",
    image: "https://placecats.com/millie/300/150"
  },
  {
    id: 2,
    description: "A test photo of a cat 2",
    image: "https://placecats.com/millie/300/150"
  },
  {
    id: 3,
    description: "A test photo of a cat 3",
    image: "https://placecats.com/millie/300/150"
  },
  {
    id: 4,
    description: "A test photo of a cat 4",
    image: "https://placecats.com/millie/300/150"
  },
  {
    id: 5,
    description: "A test photo of a cat 5",
    image: "https://placecats.com/millie/300/150"
  }
];

const app = express();
app.use(express.json());

app.listen(3333, () => {
  console.log("Server listening...");
});

app.get("/", (req, res) => {
  res.status(200).send("Imersão Dev Back-end Alura!");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function findPostById(id) {
  const index = posts.findIndex((post) => {
    return post.id === Number(id);
  });

  return posts[index];
}

app.get("/posts/:id", (req, res) => {
  const post = findPostById(req.params.id);
  res.status(200).json(post);
});
