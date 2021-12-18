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

    nombreCompleto(){return this.nombre + ' ' + this.apellido}
}

class Empleado extends Persona{
    departamento;
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this.departamento=departamento
    }

    get Departamento(){return this.departamento}
    set Departamento(departamento){this.departamento=departamento}

    //sobreescritura
    nombreCompleto(){return super.nombreCompleto()+" "+this.departamento}
    toString(){return super.nombreCompleto()+" "+this.departamento}
}

let empleado1 = new Empleado("Diego", "Moreno", "Developer");
console.log(empleado1.toString());
console.log(empleado1.nombreCompleto());