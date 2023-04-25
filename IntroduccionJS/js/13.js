// Classes 


class Producto {
constructor(nombre,precio) {
this.nombre = nombre ;
this.precio = precio ;
}

formatearProducto() {
    return `El producto ${this.nombre} tiene un precio ${this.precio}`
}

}


const producto2 = new Producto('Monitor Curvo de 49 ')