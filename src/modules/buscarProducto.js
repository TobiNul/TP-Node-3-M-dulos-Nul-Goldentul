import fs from 'fs';
function buscarProducto(nombre){
     const productos = fs.readFileSync('productos.json', 'utf-8')
        const productosLista = JSON.parse(productos);
        let productoEncontrado = productosLista.find(producto => producto.nombre === nombre);
if (!productoEncontrado) {
        productoEncontrado = null;
}
return productoEncontrado;
}
export { buscarProducto };