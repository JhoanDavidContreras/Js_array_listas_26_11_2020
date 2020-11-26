//Ingresar datos por medio del la ventana de javascript
//listas


// let lista_informacion = [];
// let nombre = prompt("Ingrese su nombre");
// lista_informacion.push(nombre);
// let apellido = prompt("Ingrese su apellido");
// lista_informacion.push(apellido);
// console.log(lista_informacion);


//Ingresar datos a la lista asociativa
// let lista_informacion = [];

// let nombre = prompt("Ingrese su nombre");
// lista_informacion["nombre"] = nombre;
// let apellido = prompt("Ingrese su apellido");
// lista_informacion["apellido"] = apellido;

// console.log(lista_informacion);


//Joson para almacenar datos

let lista_informacion = {};

let nombre = prompt("Ingrese su nombre");
lista_informacion.NOMBRE = nombre;
localStorage.setItem("NOMBRE", nombre);
let apellido = prompt("Ingrese su apellido");
lista_informacion.APELLIDO = apellido;
localStorage.setItem("APELLIDO", apellido);

console.log(lista_informacion);