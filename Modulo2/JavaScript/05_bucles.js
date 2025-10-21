for (let i=1; i<=10; i++) {
    console.log("Número: " + i);
}

suma=0;
for (let i=1; i<=100; i++) {
    suma += i;
}
console.log("La suma de los números del 1 al 100 es: " + suma);



let multiplo = 4;
console.log("Tabla de multiplicar del " + multiplo);
for (let i = 1; i <= 10; i++) {
    console.log(multiplo + " x " + i + " = " + (multiplo * i));
}

nombre="Francisco";
for (let i=0; i<nombre.length; i++) {
    console.log("Letra " + (i+1) + ": " + nombre[i]);
}