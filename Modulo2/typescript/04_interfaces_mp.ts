interface Usuario {
    id: number;
    nombre: string;
    correo?: string;
}

const usuario1: Usuario = {
    id: 101,
    nombre: 'Anthony Gualotuña'
}

const usuario2: Usuario = {
    id: 102,
    nombre: 'María López',
    correo: 'maria@tonybiblioteca.com'
}

console.log(usuario1);
console.log(usuario1.id);
console.log(usuario1.nombre);
console.log(usuario1.correo || "Sin correo registrado");

console.log(usuario2);
console.log(usuario2.id);
console.log(usuario2.nombre);
console.log(usuario2.correo);
