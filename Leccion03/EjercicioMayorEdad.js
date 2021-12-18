const edadAdulto = 18;
let comprobarEdad = (x) =>{
    if(x >= edadAdulto) console.log("Es mayor de edad");
    else console.log("Es menor de edad");
}

comprobarEdad(12);
comprobarEdad(18);
comprobarEdad(22);