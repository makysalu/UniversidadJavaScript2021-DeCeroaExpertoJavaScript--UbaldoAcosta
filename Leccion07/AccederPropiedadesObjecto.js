let persona = {
    nombre: 'Diego',
    apellido: 'Moreno',
    email: 'diego_maky@hotmail.com',
    edad: 28
}

console.log(persona);
console.log(persona.nombre);
console.log(persona["apellido"]);

for (const key in persona) {
    console.log(key +': '+persona[key]);
}