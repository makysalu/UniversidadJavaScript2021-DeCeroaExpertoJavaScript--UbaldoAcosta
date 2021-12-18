function miFuncion(){ 
    console.log("saludos desde mi funcion");
}

let miFuncionFlecha = () => console.log("saludos desde mi funcion flecha");

miFuncion();
miFuncionFlecha();

let saludar = () => "Saludos desde funcion flecha";
console.log(saludar());

let regresaObjeto = () => ({nombre:"Diego", apellido:"Moreno"});
console.log(regresaObjeto());

let funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros("hola Mundo");

let funcionSuma = (a,b) => a+b;
console.log(funcionSuma(1,2));