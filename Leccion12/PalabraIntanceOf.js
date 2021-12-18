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

function imprimir(tipo){
    if(tipo instanceof Gerente){
        console.log(tipo.departamento);
        return "Gerente";
    } 
    else if(tipo instanceof Empleado){
        return "Empleado";
    } 
}

let empleado = new Empleado("Maky",100);
console.log(imprimir(empleado));

let gerente = new Gerente("Diego",1000,"Desarrollo");
console.log(imprimir(gerente));



