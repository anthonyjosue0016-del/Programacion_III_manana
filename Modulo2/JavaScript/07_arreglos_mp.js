console.log("----- Arreglos o Array en TONY BIBLIOTECA -----");

let libros = ["Cien años de soledad", "El principito", "Don Quijote", "Harry Potter"];
let estantesVacios = new Array();
let estantesVacios2 = [];

console.log("Arreglo de libros original:", libros);
console.log(estantesVacios);
console.log(estantesVacios2);

console.log("Acceso a los elementos del array:");
console.log("Primer libro:", libros[0]);
console.log("Segundo libro:", libros[1]);
console.log("Tercer libro:", libros[2]);
console.log("Cuarto libro:", libros[3]);

console.log("Modificar un elemento del array:");
libros[0] = "Crimen y Castigo";
console.log("Array modificado:", libros);

console.log("Agregar un nuevo libro al final del array:");
libros.push("Los miserables");
console.log("Array después de agregar un libro:", libros);

console.log("Agregar un libro al inicio del array:");
libros.unshift("1984");
console.log("Array después de agregar un libro al inicio:", libros);

console.log("Eliminar el último libro del array:");
libros.pop();
console.log("Array después de eliminar el último libro:", libros);

console.log("Eliminar el primer libro del array:");
libros.shift();
console.log("Array después de eliminar el primer libro:", libros);

console.log("Iteración del array con while:");
let indice = 0;
while (indice < libros.length) {
    console.log("Libro en el índice", indice, "es:", libros[indice]);
    indice++;
}

console.log("Iteración del array con for:");
for (let i = 0; i < libros.length; i++) {
    console.log("Libro en el índice", i, "es:", libros[i]);
}

console.log("Iteración del array con for...of:");
for (let libro of libros) {
    console.log("Título del libro:", libro);
}

console.log("Iteración del array con forEach:");
libros.forEach(function(libro, indice) {
    console.log("Libro en el índice", indice, "es:", libro);
});
