function miFuncion (a, b){
    console.log(arguments.length);
    return a + b;
}

miFuncion(2,3)

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);