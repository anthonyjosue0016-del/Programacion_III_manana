export class Vehiculo{
    public marca: string;
    public tipo: string;
    constructor(marca: string, tipo: string){
        this.marca = marca;
        this.tipo = tipo;
    }
    moverse(): void{
        console.log(`El vehículo de marca ${this.marca} y tipo ${this.tipo} se está moviendo.`);
    }
}

export class Moto extends Vehiculo{}