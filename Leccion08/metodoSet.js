let persona = {
    nombre: 'Diego',
    apellido: 'Moreno',
    email: 'diego_maky@hotmail.com',
    edad: 28,
    idioma:'es',
    get lang(){return this.idioma.toUpperCase();},
    set lang(lang){this.idioma = lang.toUpperCase();},
    get nombreCompleto(){return this.nombre+' '+this.apellido}
}

persona.lang = 'en';
console.log(persona.lang);