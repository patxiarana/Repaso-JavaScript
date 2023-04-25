//POO 


/* Object literal */


const product = {
nombre : 'tablet',
precio : 500 ,
}

// Objet Constructor 

// parametros
function Producto(nombre, precio) {
this.nombre = nombre,
this.nombre = precio
}

Producto.prototype.fomatearProducto = function () {
    return `El Poducto ${this.nombre} tiene un precion de: ${this.precio}`
}


// argumentos 
const producto2 = new Producto('Monitor curvo',8000) ;
const producto3 = new Producto('Laptot',8000) ;


console.log(producto2)
console.log(producto3)
console.log(producto2.fomatearProducto())
console.log(producto3.fomatearProducto())