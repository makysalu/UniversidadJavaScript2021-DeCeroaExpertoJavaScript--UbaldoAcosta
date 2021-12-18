class Computadora{
    idComputadora;
    nombre;
    monitor;
    teclado;
    raton;
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this.idComputadora = ++Computadora.contadorComputadoras;
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton;
    }

    get IdComputadora(){return this.idComputadora}
    get Nombre(){return this.nombre}
    set Nombre(nombre){this.nombre = nombre}

    toString(){
        return "Computadora: "+this.idComputadora+", Nombre: "+this.nombre+", Monitor: "+this.monitor.toString()+", Teclado: "+this.teclado.toString()+", Raton: "+this.raton.toString();
    }
}

class Monitor{
    idMonitor;
    marca;
    tamaño;
    static contadorMonitores = 0;

    constructor(marca, tamaño){
        this.idMonitor = ++Monitor.contadorMonitores;
        this.marca = marca;
        this.tamaño = tamaño;
    }

    get IdMonitor(){return this.idMonitor}
    get Marca(){return this.marca}
    set Marca(marca){this.marca = marca}
    get Tamaño(){return this.tamaño}
    set Tamaño(tamaño){this.tamaño = tamaño}

    toString(){
        return "Monitor: "+this.IdMonitor+", Marca: "+this.Marca+", Tamaño: "+this.tamaño 
    }
}

class DispositivoEntrada{
    tipoEntrada;
    marca;

    constructor(tipoEntrada, marca){
        this.tipoEntrada = tipoEntrada;
        this.marca = marca;
    }

    get TipoEntrada(){return this.tipoEntrada}
    set TipoEntrada(tipoEntrada){this.tipoEntrada = tipoEntrada}

    get Marca(){return this.marca};
    set Marca(marca){this.marca = marca}
}

class Raton extends DispositivoEntrada{
    idRaton;
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this.idRaton = ++Raton.contadorRatones;
    }

    get IdRaton(){return this.idRaton}
    toString(){
        return "Raton: "+this.idRaton+", Tipo Entrada: "+this.tipoEntrada+", Marca: "+this.marca
    }
}

class Teclado extends DispositivoEntrada{
    idTeclado;
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this.idTeclado = ++Teclado.contadorTeclados;
    }

    get IdTeclado(){return this.idTeclado}

    toString(){
        return "Teclado: "+this.idTeclado+", Tipo Entrada: "+this.tipoEntrada+", Marca: "+this.marca
    }
}

class Orden{
    idOrden;
    computadoras =[];
    static contadorOrdenes = 0;

    constructor(){
        this.idOrden = ++Orden.contadorOrdenes;
    }

    agregarComputadora(computadora){
        this.computadoras.push(computadora)
    }

    toString(){
        let resultado = "Orden: "+this.idOrden+" ";
        this.computadoras.forEach(computadora => {
            resultado += computadora.toString()+" ";
        });
    }
}

let raton1 = new Raton('USB', 'HP');
console.log( raton1.toString() );
let raton2 = new Raton('Bluetooth', 'Dell');
raton2.marca = 'HP';
console.log( raton2.toString() );

let teclado1 = new Teclado('Bluetooth', 'MSI');
let teclado2 = new Teclado('USB', 'Acer');
console.log( teclado1.toString() );
console.log( teclado2.toString() );

let monitor1 = new Monitor('HP', 15);
let monitor2 = new Monitor('Dell', 27);
console.log( monitor1.toString() );
console.log( monitor2.toString() );

let computadora1 = new Computadora('HP', monitor1, raton1, teclado1);
console.log( `${computadora1}` );
let computadora2 = new Computadora('Armada', monitor2, raton2, teclado2);
console.log(`${computadora2}`);

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);
orden1.toString();