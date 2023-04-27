const express = require("express");

const PORT = 3000;

const app = express();

app.use(express.json());

const productos = {
  description: "Productos",
  items: [
    { id: 1, nombre: "Taza de Harry Potter", precio: 300 },
    { id: 2, nombre: "FIFA 22 PS5", precio: 1000 },
    { id: 3, nombre: "Figura Goku Super Saiyan", precio: 100 },
    { id: 4, nombre: "Zelda Breath of the Wild", precio: 200 },
    { id: 5, nombre: "Skin Valorant", precio: 120 },
    { id: 6, nombre: "Taza de Star Wars", precio: 220 },
  ],
};

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.post("/producto", (req, res) => {
  const newProduct = {
    id: productos.items.length + 1,
    nombre: req.body.nombre,
    precio: req.body.nombre,
  };
  productos.items.push(newProduct);
  res.status(200).send({ message: "Lista de productos", list: productos });
});

app.put("/producto/:id", (req, res) => {
  const actIndex = productos.items.findIndex((el) => el.id == req.params.id);
  if (actIndex > -1) {
    productos.items[actIndex].nombre =
      req.body.nombre || productos.items[actIndex].nombre;
    productos.items[actIndex].precio =
      req.body.precio || productos.items[actIndex].precio;
    res.status(201).send({ message: "Lista de productos", list: productos });
  } else {
    res.status(401).send({ message: "Id not found" });
  }
});

app.delete("/producto/:id", (req, res) => {
  const actIndex = productos.items.findIndex((el) => el.id == req.params.id);
  if (actIndex > -1) {
    productos.items = [
      ...productos.items.filter((el) => el.id != req.params.id),
    ];
    res.status(201).send({ message: "Lista de productos", list: productos });
  } else {
    res.status(401).send({ message: "Id not found" });
  }
});

app.get("/pricefilter", (req, res) => {
  if (req.query.max && req.query.min) {
    res.status(200).send({
      message: "Lista de productos",
      list: productos.items.filter(
        (el) => el.precio < req.query.max && el.precio > req.query.min
      ),
    });
  } else if (req.query.equal) {
    res.status(200).send({
      message: "Lista de productos",
      list: productos.items.filter((el) => el.precio == req.query.equal),
    });
  } else {
    res.status(401).send({ message: "Bad request try again" });
  }
});

app.get("/searchName", (req, res) => {
  if (req.query.name) {
    res.status(200).send({
      message: "Lista de productos",
      list: productos.items.filter((el) => el.nombre == req.query.name),
    });
  } else {
    res.status(401).send({ message: "Bad request try again" });
  }
});

app.get("/searchId", (req, res) => {
  if (req.query.id) {
    res.status(200).send({
      message: "Lista de productos",
      list: productos.items.filter((el) => el.id == req.query.id),
    });
  } else {
    res.status(401).send({ message: "Bad request try again" });
  }
});
