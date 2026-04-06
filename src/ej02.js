import fs from 'fs'; 

const resultado = agregarProducto ("monitor", 120000)
console.log(resultado)

function agregarProducto(nombre, precio){
    const productos = fs.readFileSync('productos.json', 'utf-8')
    const productosJson = JSON.parse(productos);
        const nuevoProducto = { nombre, precio };
        productosJson.push(nuevoProducto)
        fs.writeFileSync('productos.json', JSON.stringify(productosJson));
        return "Se añado el nuevo producto"
}




