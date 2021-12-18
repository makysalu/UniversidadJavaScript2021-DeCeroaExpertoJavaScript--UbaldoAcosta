function sumar(){
    let x= 0; y = 0;
    let resultado = "";
    try {
        const formulario = document.getElementById("formulario");
        let operandoA = formulario["operandoA"];
        let operandoB = formulario["operandoB"];
        x = parseInt(operandoA.value);
        y = parseInt(operandoB.value);
        
        if(isNaN(x) || isNaN(y)) throw "La operación no incluye números";

        resultado = (x+y);
    } catch (error) {
        resultado = error;
    }
    finally{
        document.getElementById("resultado").innerHTML = resultado;
    }    
}