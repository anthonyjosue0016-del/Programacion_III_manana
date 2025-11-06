class EmpleadoBiblioteca {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    realizarTareas() {
        console.log("Empleado de biblioteca realizando tareas.");
    }

    calcularBonificacion() {
        return this.salario * 0.15;
    }

    horasExtra(horas) {
        return ((this.salario / 30) / 8) * horas * 2;
    }
}

class Bibliotecario extends EmpleadoBiblioteca {
    calcularBonificacion() {
        return this.salario * 0.20;
    }
}

class Asistente extends EmpleadoBiblioteca {
    calcularBonificacion() {
        return this.salario * 0.10;
    }
}

const bibliotecarioLuis = new Bibliotecario("Luis", 1800);
const asistenteMaria = new Asistente("María", 1200);

bibliotecarioLuis.realizarTareas();
asistenteMaria.realizarTareas();

console.log(bibliotecarioLuis.calcularBonificacion());
console.log(asistenteMaria.calcularBonificacion());
console.log(bibliotecarioLuis.horasExtra(5));
console.log(asistenteMaria.horasExtra(5));
