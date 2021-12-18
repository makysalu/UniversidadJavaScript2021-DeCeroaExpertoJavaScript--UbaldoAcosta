"use strict"

try {
    let x = 10;
    throw "mi error"
} 
catch (error) {
    console.log(error);
}
finally{
    console.log("continuamos...");
}

let resultado = -5;

try {
    if(resultado === "") throw "cadena Vacia";
    if(!isNaN(resultado)){
        if(resultado>=0)console.log(resultado);
        else throw "Es un numero negativo"
    } 
    else throw "No es un numero" 
    
} catch (error) {
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}
finally{
    console.log("cierre programa");
}

