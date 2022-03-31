const express = require("express");


let productos = [
  {
    title: "Escuadra",
    price: 123.45,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    id: 1,
  },
  {
    title: "Calculadora",
    price: 234.56,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
    id: 2,
  },
  {
    title: "Globo Terráqueo",
    price: 345.67,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    id: 3,
  },
];

let random = Math.floor(Math.random() * productos.length);
let contador1 = 0;

const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor inicializado en puerto ${server.address().port}`);
})

app.get("/items", (req, res) => {
    ++contador1;
    res.send({ items: productos, cantidad: productos.length });
})

app.get("/item-random", (req, res) => {
    res.send({ item: productos[random] });
})

