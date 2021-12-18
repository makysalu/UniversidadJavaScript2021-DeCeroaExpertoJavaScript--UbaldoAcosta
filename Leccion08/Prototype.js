function Persona(nombre, apellido, email, edad){
    this.nombre = nombre;
    this.apellido = apellido
    this.email = email;
    this.edad = edad;
    this.nombreCompleto = function (){return this.nombre+' '+this.apellido}
}

Persona.prototype.tel = "6666666";

let persona1 = new Persona('Diego','Moreno','diego_maky@hotmail.com',28)
console.log(persona1.tel);

let persona2 = new Persona('Maky','Moreno','maky@hotmail.com',9)
console.log(persona2);

