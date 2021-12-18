let miPromesa = new Promise((resolved, rejected)=>{
    let expresion = true;
    if(expresion) resolved('Correcto');
    else rejected('Se produjo un error');
})

miPromesa
.then(
    result => console.log(result)
)
.catch(
    error => console.log(error)
)
