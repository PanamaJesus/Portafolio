
/*Panama Arellano Jesus Antoniio
4A 6/02/24
Pizarra de pendientes
Examen Practico 1*/
const readline = require('readline');
const axios = require('axios');
const { Console } = require('console');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var url = "https://jsonplaceholder.typicode.com/todos"

console.log("Pizarra de pendientes NFL");


console.log("1.Lista de todos los pendientes (solo IDs)")
console.log("2.Lista de todos los pendientes (IDs y Titles)")
console.log("3.Lista de todos los pendientes sin resolver (ID y Title)")
console.log("4.Lista de todos los pendientes resueltos (ID y Title)")
console.log("5.Lista de todos los pendientes (ID y userID)")
console.log("6.Lista de todos los pendientes resueltos (ID y userID)")
console.log("7.Lista de todos los pendientes sin resolver (ID y userID)")


rl.question('Ingrese opción deseada:', (respuesta) => {
    var resp = parseInt(respuesta); 

    if (resp > 1 || resp < 7) {
        console.log("Opcion incorrecta")
    }
    axios.get(url).then(({data})=>{
        for (const key in data){
    switch (resp) {
      case 1:
        
        console.log("Id: " +data[key].id)
        break;
      case 2:
        console.log("Id: " +data[key].id+" Title: "+data[key].title)
        break;
      case 3:
        if(data[key].completed ==false){
            console.log("Id: " +data[key].id+" Title: "+data[key].title)
        }
        break;
      case 4:
        if(data[key].completed ==true){
            console.log("Id: " +data[key].id+" Title: "+data[key].title)
        }
        break;
      case 5:
        console.log("Id: " +data[key].id + " User Id: "+data[key].userId)
        break;
      case 6:
        if(data[key].completed ==true){
            console.log("Id: " +data[key].id+" User id: "+data[key].userId)
        }
        break;
      case 7:
        if(data[key].completed ==false){
            console.log("Id: " +data[key].id+" User id: "+data[key].userId)
        }
        break;
      default:
        
        break;
    }
}
}
)
    rl.close();
  });