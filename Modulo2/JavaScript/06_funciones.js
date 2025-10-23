console.log("Funciones");

console.log("Forma Clasica");
function saludar() {
    console.log("Hola desde una función clásica");
}
saludar();

console.log("FORMA CON PARAMETROS Y RETORNO");
function sumar(a,b) {
    return a + b;
}
let resultado = sumar(4, 9);
console.log("La suma es:", resultado);

console.log("FUNCION FLECHA");
const resta = (a, b) => {
    return a - b;
}
let resultadoResta = resta(10, 4);
console.log("La resta es:", resultadoResta);

console.log("FUNCION RETORNO DIRECTO");
const cuadrado = a => a * a;
console.log("El cuadrado de 5 es:", cuadrado(5));

console.log("FUNCION CON PARAMETROS POR DEFECTO");
function saludar(nombre, saludo="Hola") {
    return saludo + " " + nombre;
}
let saludo1 = saludar("Ana", "Buenos días");
console.log(saludo1);
let saludo2 = saludar("Luis");
console.log(saludo2);

console.log("Número par o impar");
function esPar(numero) {
    return numero % 2 === 0;
}
console.log("5 es par:", esPar(5));
console.log("10 es par:", esPar(10));

console.log("Calculo del Area del triangulo");
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.log("El área del triángulo es:", calcularAreaTriangulo(5, 10));