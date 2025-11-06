console.log("CONDICIONALES DE TONY BIBLIOTECA");

let cantidadLibros = 0;
if (cantidadLibros > 0) {
    console.log("El libro está disponible para préstamo");
} else {
    console.log("El libro no está disponible en este momento");
}

let usuario = "adminBiblioteca";
let clave = "libro123";
if (usuario === "adminBiblioteca" && clave === "libro123") {
    console.log("Acceso concedido al sistema de la biblioteca");
} else {
    console.log("Acceso denegado, datos incorrectos");
}

let diasRetraso = 3;
if (diasRetraso === 0) {
    console.log("Devolución puntual");
} else if (diasRetraso <= 5) {
    console.log("Retraso leve, se aplicará una pequeña multa");
} else {
    console.log("Retraso grave, usuario suspendido temporalmente");
}

let edadUsuario = 16;
let tieneCarnet = false;
if (edadUsuario >= 18) {
    if (tieneCarnet) {
        console.log("Puede realizar préstamos de libros");
    } else {
        console.log("Necesita tener el carnet de lector para realizar préstamos");
    }
} else {
    console.log("Debe ser mayor de edad para registrarse en la biblioteca");
}

let categoria = "novela";
switch (categoria) {
    case "infantil":
        console.log("Sección de lectura infantil");
        break;
    case "novela":
        console.log("Sección de novelas y literatura general");
        break;
    case "cientifico":
        console.log("Sección de libros científicos");
        break;
    default:
        console.log("Categoría no registrada en el sistema");
}

let historia = 10;
let tecnologia = 15;
let arte = 8;

switch (true) {
    case (historia >= tecnologia && historia >= arte):
        console.log("La sección con más libros es: Historia (" + historia + ")");
        break;
    case (tecnologia >= historia && tecnologia >= arte):
        console.log("La sección con más libros es: Tecnología (" + tecnologia + ")");
        break;
    case (arte >= historia && arte >= tecnologia):
        console.log("La sección con más libros es: Arte (" + arte + ")");
        break;
    default:
        console.log("Error al comparar secciones");
}
