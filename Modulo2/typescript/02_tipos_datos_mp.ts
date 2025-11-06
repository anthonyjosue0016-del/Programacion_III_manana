let edad: number = 25;
let nombre: string = 'Anthony';
let activo: boolean = true;
let librosPrestados: any = 3;

if (edad > 18 && activo) {
    console.log('Usuario activo en TONY BIBLIOTECA');
} else {
    console.log('Usuario inactivo');
}

let libros: string[] = ['Don Quijote', 'Cien Años de Soledad', 'El Principito'];
for (let i = 0; i < libros.length; i++) {
    console.log('Libro disponible:', libros[i]);
}

enum EstadoPrestamo {
    Pendiente,
    EnCurso,
    Devuelto
}

console.log(EstadoPrestamo);
console.log('Estado actual del préstamo:', EstadoPrestamo.EnCurso);
let estadoActual: EstadoPrestamo = EstadoPrestamo.EnCurso;
if (estadoActual === EstadoPrestamo.EnCurso) {
    console.log('El libro está en curso de préstamo');
}