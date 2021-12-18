function sumaArgumentos(){
    let resultado = 0;
    for (let cont = 0; cont < arguments.length; cont++) {
        resultado += arguments[cont]
       console.log(arguments[cont]);
    }
    return resultado
}

console.log(sumaArgumentos(5, 4, 13, 10, 9));