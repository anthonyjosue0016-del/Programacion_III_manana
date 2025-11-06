console.log("FUNCIONES DE TONY BIBLIOTECA");

console.log("FORMA CLÁSICA");
function mostrarBienvenida() {
    console.log("Bienvenido al sistema de TONY BIBLIOTECA");
}
mostrarBienvenida();

console.log("FORMA CON PARÁMETROS Y RETORNO");
function calcularPrestamosTotales(prestamosDia, prestamosSemana) {
    return prestamosDia + prestamosSemana;
}
let totalPrestamos = calcularPrestamosTotales(8, 32);
console.log("Total de préstamos realizados:", totalPrestamos);

console.log("FUNCIÓN FLECHA");
const calcularMultas = (diasRetraso, valorPorDia) => {
    return diasRetraso * valorPorDia;
}
let multa = calcularMultas(3, 0.5);
console.log("El valor total de la multa es: $", multa);

console.log("FUNCIÓN RETORNO DIRECTO");
const calcularCopiasTotales = copias => copias * 10;
console.log("Total de copias registradas:", calcularCopiasTotales(7));

console.log("FUNCIÓN CON PARÁMETROS POR DEFECTO");
function saludarUsuario(nombre, saludo = "Bienvenido a la biblioteca") {
    return saludo + ", " + nombre;
}
let mensaje1 = saludarUsuario("Andrea", "Hola");
console.log(mensaje1);
let mensaje2 = saludarUsuario("Carlos");
console.log(mensaje2);

console.log("VERIFICAR DISPONIBILIDAD DE LIBRO");
function libroDisponible(stock) {
    return stock > 0;
}
console.log("¿El libro está disponible?:", libroDisponible(0));
console.log("¿El libro está disponible?:", libroDisponible(5));

console.log("CÁLCULO DEL ÁREA DE ESTANTE");
function calcularAreaEstante(ancho, alto) {
    return (ancho * alto);
}
console.log("El área del estante es:", calcularAreaEstante(1.2, 2.5), "m²");
