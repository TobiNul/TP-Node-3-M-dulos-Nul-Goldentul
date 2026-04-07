import fs from 'fs';
let productosCsv = "";
const productos = fs.readFileSync('productos.json', 'utf-8')
const productoLista = JSON.parse(productos);
for (const producto of productoLista){
    productosCsv += (`${producto.nombre},${producto.precio}\n`)
}
fs.writeFileSync('productos.csv',productosCsv)
console.log("Archivo .csv creado con exito")