import { Vehiculo, Moto } from "./11_herencia";

const miCarro = new Vehiculo('Toyota', 'Sedán');
console.log(miCarro.marca);
console.log(miCarro.tipo);
miCarro.moverse();

const miMoto = new Moto('Honda', 'Deportiva');
console.log(miMoto.marca);
console.log(miMoto.tipo);
miMoto.moverse();