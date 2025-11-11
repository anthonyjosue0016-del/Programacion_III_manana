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
exports.Enciclopedia = void 0;
var _11_herencia_mp_1 = require("./11_herencia_mp");
var Enciclopedia = /** @class */ (function (_super) {
    __extends(Enciclopedia, _super);
    function Enciclopedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Enciclopedia.prototype.getCategoria = function () {
        console.log('Consulta general');
    };
    return Enciclopedia;
}(_11_herencia_mp_1.Libro));
exports.Enciclopedia = Enciclopedia;
var miEnciclopedia = new Enciclopedia('Enciclopedia Británica', 'Referencia');
console.log(miEnciclopedia.titulo);
console.log(miEnciclopedia.genero);
miEnciclopedia.mostrarInfo();
miEnciclopedia.getCategoria();
