function miFuncion1(){
    console.log("Funcion 1");
}

function miFuncion2(){
    console.log("Funcion 2");
}

miFuncion1();
miFuncion2();

function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(a,b, funtionCallback){
    let res = a +b;
    funtionCallback("Resultado: "+res);
}

sumar(5,3, imprimir)