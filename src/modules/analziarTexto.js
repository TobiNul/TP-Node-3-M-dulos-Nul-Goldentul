let informacion = {};
function analizarTexto(texto) {
    const resultado = calcularVocalesYConsonantes(texto);
    informacion.Caracteres = texto.length;
    informacion.Palabras = texto.split(' ').length;
    informacion.Vocales = resultado[0]
    informacion.Consonantes = resultado[1]

    return informacion;
}

function calcularVocalesYConsonantes(texto) {
    const vocales = "aeiou"
    const consonantes = "bcdfghjklmnñpqrstvwxyz";
    const listaVocalYConso = [0,0]
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i].toLowerCase())) {
            listaVocalYConso[0]++;
        }
        else if (consonantes.includes(texto[i].toLowerCase())){
            listaVocalYConso[1]++
        }
    }
    
    return listaVocalYConso;
}


export { analizarTexto };