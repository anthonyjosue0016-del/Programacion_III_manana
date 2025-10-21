let temperaturas = 35;

if (temperaturas >= 30) {
    console.log("Hace calor");
} else {
    console.log("No hace calor");
}

let password = "pass123";
if(password === "pass123") {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}

let nota = 7;
if (nota >= 9) {
    console.log("Sobresaliente");
} else if (nota >= 6) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

let edad = 20;
let tiene_licencia = true;
    if (edad >= 18 ) {
        if (tiene_licencia) {
        console.log("Puede conducir");
    } else {
        console.log("Necesita licencia para conducir");
    }
} else {
    console.log("Es menor de edad");
}

//Estructura Switch
let dia="lunes";
switch (dia) {
    case "lunes":
        console.log("Inicio de Semana");
    case "viernes":
        console.log("Último día laboral");
        break
    default:
        console.log("Día normal");
}

let numero1=10;
let numero2=5;
let numero3=8;

switch (true) {
    case (numero1 >= numero2 && numero1 >= numero3):
        console.log("El número mayor es: " + numero1);
    case (numero2 >= numero1 && numero2 >= numero3):
        console.log("El número mayor es: " + numero2);
    case (numero3 >= numero1 && numero3 >= numero2):
        console.log("El número mayor es: " + numero3);
        break;
    default:
        console.log("Error al comparar números");
}