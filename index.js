const Contenedor = require("./contenedor.js")
const express = require("express");
const contenedor = new Contenedor();
const productos = new Contenedor("productos");

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Open server on port ${PORT}`);
});
app.get("/productos", (req, res) => {
    productos
      .findAll()
      .then((data) => res.send(data))
      .catch((error) => {
        console.log(error.message);
        res.send({ error: error.message });
      });
  });
  app.get("/productoRandom", (req, res) => {
    productos
      .findAll()
      .then((data) => {
        const productoAleatorio = Math.floor(Math.random() * data.length);
        res.send(data[productoAleatorio]);
        console.log(productoAleatorio)
      })
      .catch((error) => {
        console.log(error.message);
        res.send({ error: error.message });
      });
  });

let product = [
    {
        title: "pan",
        price:330, 
    },
    {
        title:"Harina",
        price: 230,
    },
    {
        title:"azucar",
        price: 300
    }
]



contenedor.saveProduct(product) .then(result => console.log(result))
// contenedor.getByID(2).then(result=> console.log(result))
// contenedor.findAll().then(result => console.log(result))
// contenedor.deleteById(2).then(result=> console.log(result))
// contenedor.deleteAll().then(result=> console.log(result))

server.on("error", (error) => console.log("Server error:", error));