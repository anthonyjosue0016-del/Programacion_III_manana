"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libros = void 0;
var Libros = /** @class */ (function () {
    function Libros(titulo, cota) {
        this.idBiblioteca = 'TONYBIBLIO2025';
        this.titulo = titulo;
        this.cota = cota;
    }
    Libros.prototype.generarCota = function () {
        this.cota = "".concat(this.idBiblioteca, "-").concat(new Date().getTime());
    };
    Libros.prototype.getCota = function () {
        return this.cota;
    };
    Libros.prototype.getAtributos = function () {
        return {
            titulo: this.titulo,
            cota: this.cota
        };
    };
    Libros.prototype.mostrarInformacion = function () {
        console.log("\uD83D\uDCDA Libro Registrado en TONY BIBLIOTECA");
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Cota Generada: ".concat(this.cota));
    };
    return Libros;
}());
exports.Libros = Libros;
var libro1 = new Libros('Desarrollo con TypeScript', '');
libro1.generarCota();
libro1.mostrarInformacion();
