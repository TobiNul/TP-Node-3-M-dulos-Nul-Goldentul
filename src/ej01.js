import fs from 'fs'

const listaProductos = productos();
console.log(listaProductos)

function productos (){
const productos = fs.readFileSync('productos.json', 'utf-8')
return productos
} 