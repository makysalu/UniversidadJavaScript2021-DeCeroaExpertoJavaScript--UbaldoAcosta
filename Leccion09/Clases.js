class Persona {
    nombre;
    apellido;

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    get Nombre(){return this.nombre}
    get Apellido(){return this.apellido}

    set Nombre(nombre){this.nombre = nombre}
    set Apellido(apellido){this.apellido=apellido}
}

let persona = new Persona("Diego", "Moreno");
console.log(persona);
console.log(persona.Nombre);
let persona2 = new Persona("Juan", "Perez");
persona2.Nombre = "Maky"
console.log(persona2);
