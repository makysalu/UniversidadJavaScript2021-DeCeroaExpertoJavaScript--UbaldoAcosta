async function funcionConPromesaAwaitTimeout(){
    console.log("inicio");
    let miPromesa = new Promise((resolve)=>{
        setTimeout(() => {
            resolve('Promesa con Await');
        }, 3000);
    });

    console.log(await miPromesa);
    console.log("fin");
}

funcionConPromesaAwaitTimeout();





