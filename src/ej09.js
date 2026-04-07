import { validarPassword } from "./modules/validarPassword.js";
const valido = validarPassword("hola");
if (valido){
    console.log("La contraseña es válida");
}
else{
    console.log("La contraseña no es válida");
}