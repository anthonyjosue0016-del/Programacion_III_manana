function saludarUsuario(nombre: string): string {
    return `Bienvenido ${nombre} a TONY BIBLIOTECA`;
}

console.log(saludarUsuario('Anthony'));

const calcularTotalLibros = (prestamos: number, devueltos: number): number => {
    return prestamos - devueltos;
}
console.log(`Libros actualmente prestados: ${calcularTotalLibros(10, 3)}`);

function mostrarMensajeBienvenida(): void {
    console.log('Hola lector!');
    console.log('Gracias por usar el sistema de control TONY BIBLIOTECA');
}
mostrarMensajeBienvenida();

function calcularMulta(diasRetraso: number): number {
    const costoPorDia = 0.50;
    return diasRetraso * costoPorDia;
}

function mostrarMulta(diasRetraso: number): void {
    const multa = diasRetraso * 0.50;
    console.log(`La multa por ${diasRetraso} días de retraso es: $${multa.toFixed(2)}`);
}

console.log(`Total a pagar por multa: $${calcularMulta(5).toFixed(2)}`);
mostrarMulta(3);
