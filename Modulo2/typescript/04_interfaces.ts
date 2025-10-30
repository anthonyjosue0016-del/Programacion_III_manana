interface Usuario{
    id: number;
    nombre: string;
    correo?: string;
}

const Usuario1: Usuario= {
    id:12,
    nombre:'Jose Garcia Marquez'
}

const Usuario2: Usuario= {
    id:15,
    nombre: 'Pablo Escobar',
    correo: 'pablo@escobar.com'
}

console.log(Usuario1);
console.log(Usuario1.id);
console.log(Usuario1.nombre);
console.log(Usuario1.correo || "Sin correo");

console.log(Usuario2);
console.log(Usuario2.id);
console.log(Usuario2.nombre);
console.log(Usuario2.correo);