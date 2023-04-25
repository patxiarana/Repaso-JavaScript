//This 

const reservacion = {
nombre : 'juan',
apellido : 'De la Torre',
total : 5000 ,
pagado : false ,
informacion: function(){
console.log(`cliente${this.nombre} total a pagar${this.total}`)
}
}

const reservacion2 = {
    nombre : 'juan',
    apellido : 'De la Torre',
    total : 5000 ,
    pagado : false ,
    informacion: function(){
    console.log(`cliente${this.nombre} total a pagar${this.total}`)
    }
    }


    reservacion.informacion() ; 
    reservacion2.informacion() ;