//El array de productos se encuentra en el JSON "productos.json".
//Clase contenedorProductos para manejar el archivo que contiene el array (modulo contenedorProductos.js).

//Ejemplo de objeto para test de POST en postman:
// {
//     "title": "Globo Terraqueo",
//     "price": 345.67,
//     "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png"
// }

import express from "express";
import { contenedorProductos } from "./contenedor";

//Montamos el server.
const app = express();
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`);
});
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Instanciamos los servicios para manejo del archivo de productos.
const productosService = new contenedorProductos();

//Endpoints.
app.get("/api/productos",async (req, res)=>{
    const array = await productosService.getProductos();
    (array.length === 0) ? res.send({error : 'no hay productos cargados'}) : res.send(array);
});
app.get("/api/productos/:id",async (req, res)=>{
    const id = req.params.id;
    const prod = await productosService.getProductoById(id);
    (prod === undefined) ? res.send({error : 'producto no encontrado'}) : res.send(prod);
});

app.post("/api/productos", async (req, res)=>{
    const estructura = ["title", "price", "thumbnail"];
    const prodReq = req.body;
    if (estructura.every(prop => prodReq.hasOwnProperty(prop))){
        const productoComplete = await productosService.saveProducto(prodReq);
        res.send(productoComplete);
    }else{
        res.send({error : 'las propiedades enviadas son incorrectas o falta alguna'});
    }
});