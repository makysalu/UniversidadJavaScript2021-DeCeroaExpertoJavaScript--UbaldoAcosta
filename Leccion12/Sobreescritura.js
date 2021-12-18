class Empleado {
    nombre;
    sueldo;
    constructor(nombre, sueldo){
        this.nombre=nombre;
        this.sueldo=sueldo;
    }

    obtenerDetalles(){
        return this.nombre+" "+this.sueldo;
    }
}

class Gerente extends Empleado{
    departamento;
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo)
        this.departamento=departamento;
    }

    obtenerDetalles(){
        return "Gerente: "+super.obtenerDetalles()+" "+this.departamento;
    }
}

let empleado = new Empleado("Maky",100);
console.log(empleado.obtenerDetalles());

let gerente = new Gerente("Diego",1000,"Desarrollo");
console.log(gerente.obtenerDetalles());