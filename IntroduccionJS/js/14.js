
const usuarioAutenticado = new Promise ( (resolve, reject) => {
const auth = true 
if(auth){
   resolve(); // El promise se cumple
} else {
 reject() // el promise no se cumple 
}
})


console.log(usuarioAutenticado)