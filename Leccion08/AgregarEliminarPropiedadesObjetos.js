let persona = {
    nombre: 'Diego',
    apellido: 'Moreno',
    email: 'diego_maky@hotmail.com',
    edad: 28
}

persona.tel = '66666666';

delete persona.tel;

console.log(persona);