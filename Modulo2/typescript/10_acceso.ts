import { Libros } from "./09_acceso";

const myLibro: Libros = new Libros('Aprendiendo TypeScript', '');
console.log(myLibro.generarCota());
myLibro.mostrarInformacion();
