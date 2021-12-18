class Persona{
    idPersona=0;
    nombre;
    apellido;
    edad;
    static contadorPersonas=0;

    constructor(nombre, apellido, edad){
        this.idPersona=++Persona.contadorPersonas;
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }

    get IdPersona () {return this.idPersona}
    get Nombre(){return this.nombre}
    get Apellido(){return this.apellido}
    get Edad(){return this.edad}

    set Nombre(nombre){this.nombre = nombre}
    set Apellido(apellido){this.apellido = apellido}
    set Edad(edad){this.edad = edad}

    toString(){
        return this.idPersona+": "+this.nombre+" "+this.apellido+" "+this.edad;
    }
}

class Empleado extends Persona{
    idEmpleado;
    sueldo;
    static contadorEmpleado = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad)
        this.sueldo = sueldo;
        this.idEmpleado = ++Empleado.contadorEmpleado;
    }

    get idEmpleado(){return this.idEmpleado}
    get Sueldo(){return this.sueldo}
    set Sueldo(sueldo){this.sueldo = sueldo}

    toString(){
        return super.toString()+" "+this.idEmpleado+" "+this.sueldo;
    }
}

class Cliente extends Persona{
    idCliente;
    fechaRegistro;
    static contadorCliente = 0;
    constructor(nombre, apellido, edad){
        super(nombre, apellido, edad);
        this.idCliente = ++Cliente.contadorCliente;
        this.fechaRegistro = new Date();
    }

    get IdCliente(){return this.idCliente}
    get FechaRegistro(){return this.fechaRegistro}
    set FechaRegistro(fechaRegistro){this.fechaRegistro=fechaRegistro}

    toString(){
        return super.toString()+" "+this.idCliente+" "+this.fechaRegistro
    }
}

let empleado = new Empleado("Diego","Moreno", 27,1000);
console.log(empleado.toString());

let cliente = new Cliente("Eva","Montoya",20)
console.log(cliente.toString());