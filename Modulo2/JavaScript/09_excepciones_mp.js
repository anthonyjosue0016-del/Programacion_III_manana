try {
    console.log(libroNoRegistrado);
} catch (error) {
    console.log("Se ha producido un error en la biblioteca:", error.message);
}

try {
    console.log("Intentando registrar préstamo...");
    throw new Error("Libro no disponible para préstamo");
} catch (error) {
    console.log("Error al registrar préstamo:", error.message);
} finally {
    console.log("Finalizando proceso de préstamo.");
}
