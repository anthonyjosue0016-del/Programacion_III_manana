export class Libro {
    public titulo: string;
    public genero: string;

    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
    }

    mostrarInfo(): void {
        console.log(`El libro "${this.titulo}" del género "${this.genero}" está disponible en TONY BIBLIOTECA.`);
    }
}

export class Revista extends Libro {}
const miRevista: Revista = new Revista('Tecnología Hoy', 'Tecnología');
miRevista.mostrarInfo();