let persona1 = {
    nombre: "Diego",
    apellido: "Moreno",
    nombreCompleto: function(titulo, tel){return titulo+': '+this.nombre+' '+this.apellido+' '+tel}
}

let persona2 ={
    nombre: "Maky",
    apellido: "Alfaro"
}

console.log('Lic', '343443');
console.log(persona1.nombreCompleto.call(persona2, 'Ing', '23232332'));