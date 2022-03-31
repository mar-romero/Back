import express from "express";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Listening on PORT ${PORT}`);
})

//Endpoints
let contador1 = 0;
let contador2 = 0;

app.get("/items", async (req, res)=>{
    ++contador1;
    const productosStr = await fs.promises.readFile("./files/productos.txt","utf-8");
    const productosArr = await JSON.parse(productosStr);
    const obj = {items: productosArr, cantidad: productosArr.length};
    res.send(obj);
})

app.get("/item-random", async (req, res)=>{
    ++contador2;
    const productosStr = await fs.promises.readFile("./files/productos.txt","utf-8");
    const productosArr = await JSON.parse(productosStr);
    const random = Math.floor(Math.random()*(productosArr.length));
    const obj = {item: productosArr[random]};
    res.status(200).send(obj);
})

app.get("/visitas", (req, res)=>{
    const obj = {visitas: {items: contador1, itemRandom: contador2}};
    res.send(obj);
})