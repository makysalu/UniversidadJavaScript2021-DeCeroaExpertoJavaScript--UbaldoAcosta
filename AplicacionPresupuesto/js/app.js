const ingresos = [
    new Ingreso("salario",1050),
    new Ingreso("abuela",25)
]

const egresos = [
    new Egreso("piso",200),
    new Egreso("tabaco",5,25)
]

let cargarApp=() => {
    cargarCabecero();
    mostrarIngresos();
    mostrarEgresos();
}

let totalIngreso = () =>{
    let totalIngreso = 0;
    for (const ingreso of ingresos) {
        totalIngreso += ingreso.precio;
    }
    return totalIngreso;
}

let totalEgreso = () =>{
    let totalEgreso = 0;
    for (const egreso of egresos) {
        totalEgreso += egreso.precio;
    }
    return totalEgreso;
}

function cargarCabecero(){
    document.getElementById("ingresos").innerHTML = "+"+totalIngreso()+"€";
    document.getElementById("egresos").innerHTML = "-"+totalEgreso()+"€";
    document.getElementById("presupuesto").innerHTML = totalIngreso()-totalEgreso()+"€";
    document.getElementById("porcentaje").innerHTML = ((totalEgreso()/totalIngreso())*100).toFixed(2)+"%";
}



function mostrarIngresos(){
    let html = "";
    for (const ingreso of ingresos) {
        html += '<div class="elemento limpiarEstilos"><div class="elemento_descripcion">'+ingreso.Descripcion+'</div><div class="derecha limpiarEstilos"><div class="elemento_valor">'+ingreso.Precio+'</div><div class="elemento_eliminar"><button class="elemento_eliminar--btn" onclick="eliminarIngreso(this)"><ion-icon name="close-circle-outline"></ion-icon></button></div></div></div>';
    }
    document.getElementById("lista-ingresos").innerHTML = html;
}

function mostrarEgresos(){
    let html = "";
    let cont = 0;
    for (const egreso of egresos) {
        html += '<div id="egreso-'+cont+'" class="elemento limpiarEstilos"><div class="elemento_descripcion">'+egreso.Descripcion+'</div><div class="derecha limpiarEstilos"><div class="elemento_valor">'+egreso.Precio+'</div><div class="presupuesto_egreso--porcentaje" id="porcentaje">'+((egreso.precio/totalEgreso())*100).toFixed(2)+'%</div><div class="elemento_eliminar"><button class="elemento_eliminar--btn" onclick="eliminarEgreso(this)"><ion-icon name="close-circle-outline"></ion-icon></button></div></div></div>';
        cont++;
    }
    document.getElementById("lista-egresos").innerHTML = html;
}

function eliminarEgreso(element){
    var id = element.parentNode.parentNode.parentNode.id;
    
    egresos.splice(id.split('-')[1], 1);

    mostrarEgresos();
    cargarCabecero();
}

function eliminarIngreso(element){
    var id = element.parentNode.parentNode.parentNode.id;
    
    ingresos.splice(id.split('-')[1], 1);

    mostrarIngresos();
    cargarCabecero();
}

function agregarDato(){
    let formulario = document.getElementById("formulario")
    let tipoDato = formulario["tipo"];
    let descripcion = formulario["descripcion"].value;
    let valor = parseInt(formulario["valor"].value);

    if(tipoDato.value == "ingreso"){
        let newIngreso = new Ingreso(descripcion, valor);
        ingresos.push(newIngreso);

        mostrarIngresos();
    }
    else if(tipoDato.value == "egreso"){
        let newEgreso = new Egreso(descripcion, valor);
        egresos.push(newEgreso);

        mostrarEgresos();
    }

    cargarCabecero();
}








