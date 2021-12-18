class Ingreso extends Dato{
    idIngreso;
    static contadorIngreso = 0;

    constructor(descripcion, precio){
        super(descripcion, precio)
        this.idIngreso = ++Ingreso.contadorIngreso;
        
    }

    get IdIngreso(){return this.idIngreso}
}