class Libro {
    constructor(titulo) {
        this.titulo = titulo;
    }

    mostrarInfo() {
        console.log("Mostrando información del libro");
    }
}

class LibroInfantil extends Libro {}

const libro1 = new Libro("Cien años de soledad");
const libroInfantil = new LibroInfantil("El principito");

libroInfantil.mostrarInfo();
libro1.mostrarInfo();
