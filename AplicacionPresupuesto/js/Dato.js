class Dato{
    idDato;
    descripcion;
    precio;
    static contadorDato = 0;
    
    constructor(descripcion, precio){
        this.idDato = ++Dato.contadorDato;
        this.descripcion = descripcion;
        this.precio = precio;
    }

    get IdDato(){return this.idDato}
    get Descripcion(){return this.descripcion}
    set Descripcion(descripcion){this.descripcion=descripcion}
    get Precio(){return this.precio}
    set Precio(precio){this.precio = precio}
}