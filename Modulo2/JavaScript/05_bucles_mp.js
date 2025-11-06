console.log("BUCLES DE TONY BIBLIOTECA");

for (let i = 1; i <= 10; i++) {
    console.log("Libro número: " + i);
}

let totalLibros = 0;
for (let i = 1; i <= 100; i++) {
    totalLibros += i;
}
console.log("El total de libros registrados es: " + totalLibros);

let copias = 4;
console.log("Copias disponibles del libro número " + copias);
for (let i = 1; i <= 10; i++) {
    console.log("Ejemplar " + i + ": disponible en el estante " + (copias * i));
}

let nombreUsuario = "TonyBiblioteca";
for (let i = 0; i < nombreUsuario.length; i++) {
    console.log("Letra " + (i + 1) + ": " + nombreUsuario[i]);
}

console.log("Bucle for");
for (let i = 1; i <= 10; i++) {
    console.log("Préstamo número:", i);
}

let prestamos = 0;
for (let i = 1; i <= 10; i++) {
    prestamos += i;
}
console.log("Total de préstamos realizados:", prestamos);

let paginas = 0;
for (let i = 1; i <= 10; i++) {
    paginas = i * i;
    console.log("Libro " + i + " tiene " + paginas + " páginas estimadas");
}

console.log("Bucle while");

let i = 1;
while (i <= 6) {
    console.log("Usuario número:", i);
    i++;
}

let libros = ["Cuentos", "Novelas", "Poesía", "Historia", "Ciencia"];
let indice = 1;
while (indice < libros.length) {
    console.log("Libro " + indice + ": " + libros[indice]);
    indice++;
}

let contador = 1;
while (contador <= 10) {
    if (contador % 2 === 0)
        console.log("El libro número " + contador + " está reservado");
    contador++;
}

let devoluciones = 5;
do {
    console.log("Devoluciones pendientes:", devoluciones);
    devoluciones--;
} while (devoluciones != 0);

let mult = 1;
while (mult <= 10) {
    console.log("Usuario " + mult + " ha devuelto " + mult * 5 + " libros");
    mult++;
}

let calificaciones = [70, 85, 90, 60, 95];
let indice2 = 1;
let mayor = calificaciones[0];
while (indice2 < calificaciones.length) {
    if (calificaciones[indice2] > mayor) {
        mayor = calificaciones[indice2];
    }
    indice2++;
}
console.log("La mejor calificación en evaluación de usuario es:", mayor);
