let personas = [new Persona("Diego","Moreno"), new Persona("Maky","Moreno")];

function inicioApp(){

    mostrarPersonas();

}

function mostrarPersonas(){
    let html = "";
    for (const persona of personas) {
        html += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById("personas").innerHTML = html;
}

function agregarPersona(){
    let formulario = document.getElementById("formulario");

    let nombre = formulario["nombre"];
    let apellido = formulario["apellido"];

    if(nombre.value != "" && apellido.value != ""){
        let newPersona = new Persona(nombre.value, apellido.value);
        personas.push(newPersona);
        mostrarPersonas();
    }
}

