import fs from 'fs'; 
function agregarProducto(nombre, precio){
    const productos = fs.readFileSync('productos.json', 'utf-8')
    const productoLista = JSON.parse(productos);
        const nuevoProducto = { nombre, precio };
        productoLista.push(nuevoProducto)
        fs.writeFileSync('productos.json', JSON.stringify(productoLista));
        return "Se añado el nuevo producto"
}
export { agregarProducto };