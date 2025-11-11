import { Libro } from "./11_herencia_mp";

export class Enciclopedia extends Libro {
    getCategoria(): void {
        console.log('Consulta general');
    }
}

const miEnciclopedia = new Enciclopedia('Enciclopedia Británica', 'Referencia');
console.log(miEnciclopedia.titulo);
console.log(miEnciclopedia.genero);
miEnciclopedia.mostrarInfo();
miEnciclopedia.getCategoria();
