/*
6am-11am Buenos dias
12am-18pm Buenas Tardes
19pm-24pm Buenas Noches
0am-6am Durmiendo
*/
let hora = 12
let saludo = "";
if(hora >= 0 && hora <= 6) saludo = "Durmiendo";
else if(hora > 6 && hora <= 11) saludo = "Buenos días";
else if(hora>11 && hora <= 18) saludo = "Buenas Tardes";
else if(hora > 19 && hora <= 24) saludo = "Buenas Noches";

if(saludo != "") console.log(saludo);
else console.log("Numero no valido");
