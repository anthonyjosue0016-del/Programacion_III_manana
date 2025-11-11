export class Libros {
    public titulo: string;
    public cota: any;
    protected idBiblioteca: string = 'TONYBIBLIO2025';

    constructor(titulo: string, cota: any) {
        this.titulo = titulo;
        this.cota = cota;
    }

    generarCota(): void {
        this.cota = `${this.idBiblioteca}-${new Date().getTime()}`;
    }

    getCota(): any {
        return this.cota;
    }

    getAtributos(): any {
        return {
            titulo: this.titulo,
            cota: this.cota
        };
    }

    mostrarInformacion(): void {
        console.log(`📚 Libro Registrado en TONY BIBLIOTECA`);
        console.log(`Título: ${this.titulo}`);
        console.log(`Cota Generada: ${this.cota}`);
    }
}

const libro1 = new Libros('Desarrollo con TypeScript', '');
libro1.generarCota();
libro1.mostrarInformacion();
