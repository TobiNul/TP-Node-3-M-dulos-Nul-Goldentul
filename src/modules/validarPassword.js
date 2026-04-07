function validarPassword(password){
    let valida = false;
    if (password.length >= 8 && /\d/.test(password) && /[A-Z]/.test(password)){
        valida = true
    }
   return valida
} 
export {validarPassword}