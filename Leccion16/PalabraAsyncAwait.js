async function miFuncionPromesa(){
    return "Saludos";
}

miFuncionPromesa()
.then( result => console.log(result))
.catch( error => console.log(error))

async function funcionAwait(){
    let miPromesa = new Promise((resolve)=>{
        resolve('Promesa con Await');
    });

    console.log(await miPromesa);
}

funcionAwait();





