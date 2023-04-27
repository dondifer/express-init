const express = require("express");

const PORT = 3004;

const members = [
  {
    id: 1,

    name: "John Doe",

    email: "john@gmail.com",

    status: "active",
  },

  {
    id: 2,

    name: "Bob Williams",

    email: "bob@gmail.com",

    status: "inactive",
  },

  {
    id: 3,

    name: "Shannon Jackson",

    email: "shannon@gmail.com",

    status: "active",
  },
];

const app = express();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.get("/people", (req, res) => {
  res.send(members);
});
