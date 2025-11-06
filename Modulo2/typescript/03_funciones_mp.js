function saludarUsuario(nombre) {
    return "Bienvenido ".concat(nombre, " a TONY BIBLIOTECA");
}
console.log(saludarUsuario('Anthony'));
var calcularTotalLibros = function (prestamos, devueltos) {
    return prestamos - devueltos;
};
console.log("Libros actualmente prestados: ".concat(calcularTotalLibros(10, 3)));
function mostrarMensajeBienvenida() {
    console.log('Hola lector!');
    console.log('Gracias por usar el sistema de control TONY BIBLIOTECA');
}
mostrarMensajeBienvenida();
function calcularMulta(diasRetraso) {
    var costoPorDia = 0.50;
    return diasRetraso * costoPorDia;
}
function mostrarMulta(diasRetraso) {
    var multa = diasRetraso * 0.50;
    console.log("La multa por ".concat(diasRetraso, " d\u00EDas de retraso es: $").concat(multa.toFixed(2)));
}
console.log("Total a pagar por multa: $".concat(calcularMulta(5).toFixed(2)));
mostrarMulta(3);
