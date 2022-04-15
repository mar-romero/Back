export default class Productos {
    constructor() {
        this.productos = [];
    }
    getProductos = () => {
        return this.productos;
    }
    guardarProducto = (producto) => {
        this.productos.push(producto);
    }
}