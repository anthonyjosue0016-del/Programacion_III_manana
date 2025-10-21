console.log("VARIABLES EN TONY BIBLIOTECA");

saludo = "Hola desde TONY BIBLIOTECA";
console.log("Variable Saludo:", saludo);
console.log("Tipo de dato de Saludo:", typeof saludo);

numero = 256;
console.log("Variable Numero:", numero);
console.log("Tipo de dato de Numero:", typeof numero);

booleana = true;
console.log("Variable Booleana:", booleana);
console.log("Tipo de dato de Booleana:", typeof booleana);

indefinida = undefined;
console.log("Variable Indefinida:", indefinida);
console.log("Tipo de variable:", typeof indefinida);

nula = null;
console.log("Variable Nula:", nula);
console.log("Tipo de variable:", typeof nula);

bigentero = 9007199254740991n;
console.log("Variable BigInt:", bigentero);
console.log("Tipo de variable:", typeof bigentero);

libro = {
    titulo: "Aprendiendo JavaScript",
    paginas: 350
};
console.log("Variable Objeto:", libro);
console.log("Tipo de variable:", typeof libro);

numerosPaginas = [120, 220, 340, 400, 150];
console.log("Variable Array:", numerosPaginas);
console.log("Tipo de variable:", typeof numerosPaginas);
funcionSaludo = function() {
    return "Hola, bienvenido a TONY BIBLIOTECA";
}