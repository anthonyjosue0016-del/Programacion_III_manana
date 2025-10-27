console.log("----- Arreglos o Array en JavaScript -----");
let numeros = [10, 5, 26, 9];
let arrayVacio = new Array();
let arrayVacio2 = [];
console.log("Arreglo de numeros original:", numeros);
console.log(arrayVacio);
console.log(arrayVacio2);
console.log("Acceso a los elementos del array:");
console.log("Primer elemento:", numeros[0]);
console.log("Segundo elemento:", numeros[1]);
console.log("Tercer elemento:", numeros[2]);
console.log("Cuarto elemento:", numeros[3]);

console.log("Modificar elemento del array:");
numeros[0] = 100;
console.log("Array modificado:", numeros);

console.log("Agregar elementos al array:");
numeros.push(500);
console.log("Array después de agregar un elemento:", numeros);

console.log("Agregar elementos al inicio del array:");
numeros.unshift(888);
console.log("Array después de agregar un elemento al inicio:", numeros);

console.log("Eliminar el último elemento del array:");
numeros.pop();
console.log("Array después de eliminar el último elemento:", numeros);

console.log("Eliminar el primer elemento del array:");
numeros.shift();
console.log("Array después de eliminar el primer elemento:", numeros);

console.log("Iteracción de array con while:");
let indice = 0;
while (indice < numeros.length) {
    console.log("Elemento en el índice", indice, "es:", numeros[indice]);
    indice++;
}
console.log("Iteracción de array con for:");
for (let i = 0; i < numeros.length; i++) {
    console.log("Elemento en el índice", i, "es:", numeros[i]);
}
console.log("Iteracción de array con for...of:");
for (let num of numeros) {
    console.log("Elemento del array es:", num);
}
console.log("Iteracción de array con forEach:");
numeros.forEach(function(num, indice) {
    console.log("Elemento del array en el índice", indice, "es:", num);dgfewfej
});

