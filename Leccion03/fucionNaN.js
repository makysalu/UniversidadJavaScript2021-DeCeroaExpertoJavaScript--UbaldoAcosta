let edad = "19";
edad = Number(edad)
console.log(edad);
if(isNaN(edad)) console.log("No es un numero");
else {
    if(edad>=18)console.log("Puedo votar");
    else console.log("No puede");
}