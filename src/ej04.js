
mostrarPais()
async function obtenerPais(nombrePais) {
    const resultado = await fetch(`https://restcountries.com/v3.1/name/${nombrePais}`)
    const info = await resultado.json();
    return{
        nombre: info[0].name.common,
        capital: info[0].capital[0],
        continente: info[0].region,
        poblacion: info[0].population

    }
}

async function mostrarPais(){
    const resu = await obtenerPais("Argentina")
    console.log(resu)
}