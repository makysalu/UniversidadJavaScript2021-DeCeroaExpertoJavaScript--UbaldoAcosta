let persona = {
    nombre: 'Diego',
    apellido: 'Moreno',
    email: 'diego_maky@hotmail.com',
    edad: 28,
    nombreCompleto: function(){return this.nombre+' '+this.apellido}
}

console.log(persona.nombreCompleto());
