var edad = 25;
var nombre = 'Anthony';
var activo = true;
var librosPrestados = 3;
if (edad > 18 && activo) {
    console.log('Usuario activo en TONY BIBLIOTECA');
}
else {
    console.log('Usuario inactivo');
}
var libros = ['Don Quijote', 'Cien Años de Soledad', 'El Principito'];
for (var i = 0; i < libros.length; i++) {
    console.log('Libro disponible:', libros[i]);
}
var EstadoPrestamo;
(function (EstadoPrestamo) {
    EstadoPrestamo[EstadoPrestamo["Pendiente"] = 0] = "Pendiente";
    EstadoPrestamo[EstadoPrestamo["EnCurso"] = 1] = "EnCurso";
    EstadoPrestamo[EstadoPrestamo["Devuelto"] = 2] = "Devuelto";
})(EstadoPrestamo || (EstadoPrestamo = {}));
console.log(EstadoPrestamo);
console.log('Estado actual del préstamo:', EstadoPrestamo.EnCurso);
var estadoActual = EstadoPrestamo.EnCurso;
if (estadoActual === EstadoPrestamo.EnCurso) {
    console.log('El libro está en curso de préstamo');
}
