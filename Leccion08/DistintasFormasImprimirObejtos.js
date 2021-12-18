let persona = {
    nombre: 'Diego',
    apellido: 'Moreno',
    email: 'diego_maky@hotmail.com',
    edad: 28
}

console.log(persona.nombre+', '+persona.apellido+", "+persona.edad);

for (const key in persona) {
   console.log(key+': '+persona[key]);
}

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);