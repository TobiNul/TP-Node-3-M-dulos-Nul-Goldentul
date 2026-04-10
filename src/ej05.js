import { buscarProducto } from "./modules/buscarProducto.js";
const producto = buscarProducto("Mouse");
if (producto !== null) {
    console.log("Producto encontrado");
    console.log(`Producto: ${producto.nombre}`);
    console.log(`Precio: ${producto.precio}`);
}
else {
    console.log("Producto no encontrado");
}
