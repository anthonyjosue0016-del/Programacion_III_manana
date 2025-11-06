class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    verificarEdad() {
        if (this.edad >= 18) {
            console.log(this.nombre + " puede registrarse como usuario adulto en la biblioteca");
        } else {
            console.log(this.nombre + " solo puede acceder al área juvenil de la biblioteca");
        }
    }

    mostrarDatos() {
        console.log("Usuario:", this.nombre, "y su Edad:", this.edad);
    }
}

const usuario1 = new Usuario("Melanie Minango", 20);
usuario1.verificarEdad();
usuario1.mostrarDatos();
