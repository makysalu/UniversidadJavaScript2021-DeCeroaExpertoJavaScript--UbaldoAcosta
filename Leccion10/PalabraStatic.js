class Persona {
    static contador = 0;
    idPersona;
    nombre;
    apellido;
    
    static get Max_OBJ(){return 5}

    constructor(nombre, apellido){
        if(Persona.contador < Persona.Max_OBJ){
            this.idPersona= ++Persona.contador;
            this.nombre = nombre;
            this.apellido = apellido;
        }
        else throw "Se supero el maximo de personas";
        
    }

    get Nombre(){return this.nombre}
    get Apellido(){return this.apellido}

    set Nombre(nombre){this.nombre = nombre}
    set Apellido(apellido){this.apellido=apellido}

    nombreCompleto(){return this.idPersona+": "+this.nombre + ' ' + this.apellido}

    static saludar(){console.log("saludo desde metodo statico");}

    static saludar2(persona){console.log(persona.nombreCompleto());}
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
}

Persona.saludar();
let persona = new Persona("Diego","Moreno");
Persona.saludar2(persona);

let empleado = new Empleado("Maky","Moreno","Perraco")
Empleado.saludar2(empleado);

Persona.Max_OBJ = 10;
console.log(Persona.Max_OBJ);


