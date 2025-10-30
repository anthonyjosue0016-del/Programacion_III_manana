try {
    console.log(variableNoDeclarada);
} catch (error) {
    console.log("Se ha producido un error:", error.message);
}




try {
    console.log("Intentando abrir archivo. . . .");
    throw new Error("Archivo no encontrado");
} catch (error) {
    console.log("Error al abrir el archivo:", error.message);
} finally {
    console.log("Cerrando el intento de abrir archivo.");
}
