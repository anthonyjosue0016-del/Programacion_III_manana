"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Revista = exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
    }
    Libro.prototype.mostrarInfo = function () {
        console.log("El libro \"".concat(this.titulo, "\" del g\u00E9nero \"").concat(this.genero, "\" est\u00E1 disponible en TONY BIBLIOTECA."));
    };
    return Libro;
}());
exports.Libro = Libro;
var Revista = /** @class */ (function (_super) {
    __extends(Revista, _super);
    function Revista() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Revista;
}(Libro));
exports.Revista = Revista;
var miRevista = new Revista('Tecnología Hoy', 'Tecnología');
miRevista.mostrarInfo();
