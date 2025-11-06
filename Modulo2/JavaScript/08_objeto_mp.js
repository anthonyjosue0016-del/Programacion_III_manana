console.log("----- Objetos en TONY BIBLIOTECA -----");

let libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    categoria: "Novela"
};
console.log("Objeto libro original:", libro);

console.log("Acceso a las propiedades del objeto:");
console.log("Título:", libro.titulo);
console.log("Autor:", libro["autor"]);
console.log("Categoría:", libro["categoria"]);

console.log("Modificar propiedad del objeto:");
libro.titulo = "El amor en los tiempos del cólera";
console.log("Objeto libro modificado:", libro);

console.log("Incluir nueva propiedad al objeto:");
libro.disponibilidad = true;
console.log("Objeto libro después de agregar una propiedad:", libro);

console.log("Eliminar propiedad del objeto:");
delete libro.disponibilidad;
console.log("Objeto libro después de eliminar una propiedad:", libro);

console.log("Recorrer un objeto:");
for (let clave in libro) {
    console.log("La clave", clave, "tiene el valor:", libro[clave]);
}

console.log("Mostrar claves con Object.keys():");
console.log(Object.keys(libro));

console.log("Mostrar valores con Object.values():");
console.log(Object.values(libro));

console.log("Objetos anidados:");
let prestamo = {
    usuario: {
        nombre: "María",
        apellido: "Lopez",
        carnet: "BIB1234"
    },
    libro: {
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        categoria: "Clásico"
    },
    detalles: {
        fechaPrestamo: "2025-10-29",
        fechaDevolucion: "2025-11-05",
        devuelto: false
    }
};

console.log("Objeto préstamo:", prestamo);
