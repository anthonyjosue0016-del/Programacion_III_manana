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


console.log("Bucle for")
for (let i=1; i <= 10; i++){
    console.log("Número:", i);
}
suma = 0;
for (let i=1; i <= 10; i++){
    suma += i;
}
console.log("La suma es:", suma);

cuadrado = 0;
for (let i=1; i <= 10; i++){
    cuadrado = i * i;
    console.log("El cuadrado de", i, "es:", cuadrado);
}


console.log("Bucle while")

let i=1
while (i <= 6){
    console.log("indice:", i);
    i++;
}


let miArreglo = [-2, 3, 1, 2, 3];
let indice = 1;
while (indice < miArreglo.length){
    console.log("valor", indice, "es:", miArreglo[indice]);
    indice++;
}


let numero = 1;
while(numero <= 10){
    if (numero % 2 === 0)
        console.log("Numero:", numero, "es par");
    numero++;
}


let x = 5
do {
    console.log("x es:", x);
    x--;
} while (x!=0);


let mult=1
while (mult <=10){
    console.log(mult, '*5=', mult * 5);
    mult++;
}

let miArreglo2= [10, 20, 30, 40, 50];
let indice2=1;
let mayor= miArreglo2[0];
while (indice2 < miArreglo2.length){
    if (miArreglo2[indice2] > mayor){
        mayor = miArreglo2[indice2];
    }
    indice2++;
}
console.log("El mayor es:", mayor);

