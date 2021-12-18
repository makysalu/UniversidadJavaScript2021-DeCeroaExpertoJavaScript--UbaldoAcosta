let mes = 4;
let estacion;
/*
if(mes==1) console.log("Enero");
else if(mes==2) console.log("Febrero");
else if(mes==3) console.log("Marzo");
else if(mes==4) console.log("Abril");
else if(mes==5) console.log("Mayo");
else if(mes==6) console.log("Junio");
else if(mes==7) console.log("Julio");
else if(mes==8) console.log("Agosto");
else if(mes==9) console.log("Septiembre");
else if(mes==10) console.log("Octubre");
else if(mes==11) console.log("Noviembre");
else if(mes==12) console.log("Diciembre");
else console.log("Mes no valido");
*/

if(mes==1 || mes==2 || mes == 12) estacion ="Invierno";
else if(mes ==3 || mes == 4 || mes == 5) estacion ="Primavera";
else if(mes == 6 || mes == 7 || mes == 8) estacion ="Verano";
else if(mes==9 || mes==10 || mes == 11) estacion ="Otoño";
else console.log("Numero no valido");

if(estacion!=undefined) console.log(estacion);
