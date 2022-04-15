const fs = require("fs");

export class contenedorProductos {
    constructor(){
        this.productos = [];
    };
    async getProductos(){
        try {
            const read = await fs.promises.readFile("/productos.json", "utf-8");
            this.productos = await JSON.parse(read);
            return this.productos;
        } catch (error) {
            console.log("No se pudo leer el archivo: " + error.message);
        }
    };
    async getProductoById(id) {
        try {
            await this.getProductos();
            const prodById = this.productos.filter(prod => prod.id == id);
            return prodById[0];
        } catch (error) {
            console.log("No se pudo obtener el producto: " + error.message);
        }
    };
    async saveProducto(prod) {
        try {
            await this.getProductos();
            const id = this.productos[this.productos.length-1]?.id +1 || 1;
            const newProd = {...prod, id};
            this.productos.push(newProd);
            await fs.promises.writeFile("/productos.json",JSON.stringify(this.productos,null,"\t"));
            return newProd;
        } catch (error) {
            console.log("No se pudo guardar el producto: " + error.message);
        }
    };
};