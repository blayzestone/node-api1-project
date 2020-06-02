const express = require("express");

const server = express();

const port = 8000;

server.use(express.json());

let users = [
  {
    id: 0,
    name: "John Doe",
    bio: "foobar",
  },
];

server.post("/api/users", (req, res) => {
  const user = {
    ...req.body,
    id: users.length,
  };
  users.push(user);
  res.status(200).json(user);
});

server.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

server.get("/api/users/:id", (req, res) => {});

server.delete("/api/users/:id", (req, res) => {});

server.patch("/api/users/:id", (req, res) => {});

server.listen(port, () =>
  console.log(`\n Server is running on port ${port} \n`)
);
