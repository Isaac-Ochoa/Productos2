const { log } = require("console");
const crypto= require("crypto");

function encriptarPassword(password){
    const salt = crypto.randomBytes(32).toString("hex");
    //console.log(salt);
    const hash = crypto.scryptSync(password, salt, 100000, 64, "sha512").toString();
    //console.log(hash);
    return{
        salt,
        hash
    }
}

function validarPassword(password, salt, hash){//primero el usuario ingresa la constraseña y despues el hash la encriptara
    const hashEvaluar = crypto.scryptSync(password, salt, 100000, 64, "sha512").toString();
    return hashEvaluar == hash;
}

function usuarioAutorizado(){

}

function adminAutorizado(){

}

module.exports={
    encriptarPassword,
    validarPassword,
    usuarioAutorizado,
    adminAutorizado
}

//validarPassword();
//encriptarPassword("abc");