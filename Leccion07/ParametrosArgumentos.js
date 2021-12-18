let suma = function(a = 4,b = 5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a +b;
}

console.log(suma(1,2));