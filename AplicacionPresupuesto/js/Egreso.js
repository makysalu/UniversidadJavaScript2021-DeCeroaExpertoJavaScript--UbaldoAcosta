class Egreso extends Dato{
    idEgreso;
    static contadorEgreso = 0;

    constructor(descripcion, precio){
        super(descripcion, precio)
        this.idEgreso = ++Egreso.contadorEgreso;
    }

    get IdEgreso(){return this.idEgreso}
}