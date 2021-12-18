let numero = "10";
console.log(typeof(numero));
numero = parseInt(numero);
console.log(typeof(numero));
console.log(numero);

let edad = "19";
edad = Number(edad)
if(edad>=18)console.log("Puedo votar");
else console.log("No puede");

var resultado = (edad>=18) ? "Puede votar": "No puede votar";
console.log(resultado);