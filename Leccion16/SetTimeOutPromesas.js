let promesa = new Promise((resolve)=>{
  
    setTimeout(() => resolve("Saludos"), 300);
    
})

promesa
.then( result => console.log(result))
.catch( error => console.log(error))
