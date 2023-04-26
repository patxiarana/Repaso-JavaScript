
const usuarioAutenticado = new Promise ( (resolve, reject) => {
const auth = true 
if(auth){
   resolve(); // El promise se cumple
} else {
 reject() // el promise no se cumple 
}
})

usuarioAutenticado
.then(function(resultado) {
    console.log(resultado)
})


console.log(usuarioAutenticado)

// 3 Estados del promise
// Penddingl: no se a cumplido ni a sido rechazado
//fulffiled: ya se cumplio 
// Reject se a rechazado o no se pudo cumplir 
