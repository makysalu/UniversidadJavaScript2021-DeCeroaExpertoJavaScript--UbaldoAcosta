class Orden{
    idOrden;
    productos = [];
    contadorProductosAgregados = 0;
    static contadorOrdenes = 0;
    static get Max_Productos(){return 5};

    constructor(){
        this.idOrden=++Orden.contadorOrdenes;
        this.productos = [];
        this.contadorProductosAgregados = 0;
    }

    get IdOrden(){return this.idOrden}
    get Productos(){return this.productos}
    set Productos(productos){this.productos=productos}

    get ContadorProductosAgregados(){return this.contadorProductosAgregados}
    set ContadorProductosAgregados(contador){this.contadorProductosAgregados=contador}

    agregarProductos(producto){
        if(this.contadorProductosAgregados<Orden.Max_Productos) {
            this.productos.push(producto);
            this.contadorProductosAgregados++;
        }
    }

    calcularTotal(){
        let total = 0;
        this.productos.forEach(producto => {
            total += producto.precio;
        });
        return total;
    }

    toString(){
        let result = this.idOrden+" ";

        this.productos.forEach(producto => {
            result += producto.toString()+" ";
        });

        result += this.ContadorProductosAgregados;
        return result;
    }
}

class Producto{
    idProducto;
    nombre;
    precio;
    static contadorProductos = 0;

    /*constructor(){
        this.idProducto = ++Producto.contadorProductos;
        this.nombre = "";
        this.precio = 0;
    }*/
    constructor(nombre, precio){
        this.idProducto = ++Producto.contadorProductos;
        this.nombre = nombre;
        this.precio = precio;
    }

    get IdProducto(){return this.idProducto};
    get Nombre(){return this.nombre};
    set Nombre(nombre){this.nombre=nombre}
    get Precio(){return this.precio}
    set Precio(precio){this.precio=precio}

    toString(){
        return this.idProducto+" "+this.nombre+" "+this.precio;
    }
}
let producto1 = new Producto("nose",10);
let producto2 = new Producto("nose",10);

let orden = new Orden();
orden.agregarProductos(producto1);
orden.agregarProductos(producto2);
console.log(orden.toString());
