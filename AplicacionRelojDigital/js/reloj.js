function mostrarReloj(){
    let fecha = new Date();
    const dias = ["DOM","LUN","MAR","MIR","JUE","VIR","SAB"];
    const meses = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
    
    document.getElementById("hora").innerHTML = `${formatoHora(fecha.getHours())}:${formatoHora(fecha.getMinutes())}:${formatoHora(fecha.getSeconds())}`;
    document.getElementById("fecha").innerHTML = `${dias[fecha.getDay()]}. ${fecha.getDate()} ${meses[fecha.getMonth()]}`

    document.getElementById("contenedor").classList.toggle("animar")
}

const formatoHora = (hora) => {
    if(hora<10){
        hora = "0"+hora;
    }
    return hora
}

setInterval(mostrarReloj, 1000);
