const persona = {
    nombre:'Diego',
    apellido:'Moreno'
}

function cambiarValorObjeto(persona){
    persona.nombre = "Maky"
    persona.apellido = "Moreno Alfaro";
}

cambiarValorObjeto(persona);
console.log(persona);