class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    abrir() {
        console.log(`${this.titulo} de ${this.autor} ha sido abierto para lectura.`);
    }

    leer() {
        console.log(`Estás leyendo "${this.titulo}" de ${this.autor}.`);
    }

    cerrar() {
        console.log(`${this.titulo} de ${this.autor} ha sido cerrado.`);
    }
}

const miLibro = new Libro("Cien años de soledad", "Gabriel García Márquez");
miLibro.abrir();
miLibro.leer();
miLibro.cerrar();
