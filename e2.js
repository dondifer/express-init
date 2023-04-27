const express = require("express");

const PORT = 3005;

const app = express();

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

app.listen(PORT, () => {
  console.log(`Servidor levantado en el puerto ${PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).send("Benvenuti ala la felicitá al cuadrado");
});

app.get("/productos", (req, res) => {
  res.status(200).send("Listiña de productiños");
});

app.post("/productos", (req, res) => {
  res.status(200).send("crear un producto");
});

app.put("/productos", (req, res) => {
  res.status(200).send("actualizar un producto");
});

app.delete("/productos", (req, res) => {
  res.status(200).send("borrar un producto");
});

app.get("/usuarios", (req, res) => {
  res.status(200).send("Listiña de usuarios");
});

app.post("/usuarios", (req, res) => {
  res.status(200).send("crear un usuario");
});

app.put("/usuarios", (req, res) => {
  res.status(200).send("actualizar un usuario");
});

app.delete("/usuarios", (req, res) => {
  res.status(200).send("borrar un usuario");
});
