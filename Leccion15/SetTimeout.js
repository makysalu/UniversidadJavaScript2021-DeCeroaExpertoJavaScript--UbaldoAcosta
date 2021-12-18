function miFuncionCallback(){
    console.log("Saludo Asincrono SetTimeOut");
}

setTimeout(miFuncionCallback, 3000);

setTimeout( () => console.log("Saludo Asincrono 2") ,4000)