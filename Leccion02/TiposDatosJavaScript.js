/*
Ejemplo de tipos de datos en js
*/
//string
var nombre = "Diego";
console.log(nombre);
console.log(typeof nombre);

//number
var numero = 1000;
console.log(numero);
console.log(typeof numero);

//Objeto
var objeto = {
    nombre: "Diego",
    apellido1: "Moreno",
    apellido2: "Alfaro",
    telefono: "628527689",
    edad: 27
}
console.log(objeto);
console.log(typeof objeto);

//boolean
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

//Funcion
var suma = (a,b) =>a+b;
console.log(suma(2,3));
console.log(typeof suma);

//symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//clase
class Persona{
    nombre;
    apellido;
    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido
    }
}
console.log(Persona)
console.log(typeof Persona);

//undefined
var x;
console.log(x);
console.log(typeof x);

//null
var y = null;
console.log(y);
console.log(typeof y);

//array
var autos = ["BMW", "Audi", "Volvo"]
console.log(autos);
console.log(typeof autos);





