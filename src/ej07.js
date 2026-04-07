let segundos = 0;
let temportizador = setInterval(sumarSegundos, 1000)
setTimeout(() => {clearInterval(temportizador); console.log("Fin del contador"); }, 12000);


function sumarSegundos(){
    
        console.log(segundos)
segundos++;
}