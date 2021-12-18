let persona = {
    nombre: 'Diego',
    apellido: 'Moreno',
    email: 'diego_maky@hotmail.com',
    edad: 28,
    get nombreCompleto(){return this.nombre+' '+this.apellido}
}

console.log(persona.nombreCompleto);