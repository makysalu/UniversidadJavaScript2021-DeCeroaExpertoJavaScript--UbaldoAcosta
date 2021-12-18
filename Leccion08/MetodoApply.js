let persona1 = {
    nombre: "Diego",
    apellido: "Moreno",
    nombreCompleto: function(titulo, tel){return titulo+': '+this.nombre+' '+this.apellido+' '+tel}
}

let persona2 ={
    nombre: "Maky",
    apellido: "Alfaro"
}

console.log(persona1.nombreCompleto('Lic', "666666"));

let arreglo = ['Ing','23232323']
console.log(persona1.nombreCompleto.apply(persona2, arreglo))