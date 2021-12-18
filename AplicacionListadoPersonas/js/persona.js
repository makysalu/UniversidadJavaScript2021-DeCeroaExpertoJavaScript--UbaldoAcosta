class Persona{
    idPersona;
    nombre;
    apellido;
    static contadorPersona = 0;

    constructor(nombre, apellido){
        this.idPersona = ++Persona.contadorPersona;
        this.nombre = nombre;
        this.apellido = apellido;
    }
}