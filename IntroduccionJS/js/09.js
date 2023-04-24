// Objetos
/*
const nombreProducto = "Monitor 20 Pulgadas" ;
const precio = 300 ;
const disponible = true ;
*/

const producto = {
    nombreProduto : "Monitor 20 Pulgadas" ,
    precio : 300 ,
    disponible : true ,
}

// Forma anterior 

const precioProducto  = producto.precio ;
const nombreProducto = producto.nombreProduto ;



// Destructuring 

const {precio} = producto ;
const {nombreProduto} = producto ;



console.log(precio)
console.log(producto)