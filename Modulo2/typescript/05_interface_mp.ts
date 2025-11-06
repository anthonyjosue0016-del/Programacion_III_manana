export interface Usuario {
    id: number;
    nombre: string;
    correo?: string;
}

const usuario1: Usuario = {
    id: 1,
    nombre: 'Anthony Gualotuña',
    correo: 'anthony@tonybiblioteca.com'
};

const usuario2: Usuario = {
    id: 2,
    nombre: 'Dario Simbaña'
};

console.log(usuario1);
console.log(usuario2);
console.log(usuario1.correo);
