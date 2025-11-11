import { Libro, Revista } from "./11_herencia_mp";

const miLibro = new Libro('Cien Años de Soledad', 'Realismo Mágico');
console.log(miLibro.titulo);
console.log(miLibro.genero);
miLibro.mostrarInfo();

const miRevista = new Revista('National Geographic', 'Ciencia');
console.log(miRevista.titulo);
console.log(miRevista.genero);
miRevista.mostrarInfo();
