var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//FUNÇÃO NORMAL
function identidade(parametro) {
    return parametro;
}
//GENERIC PASSANDO PARAMETRO GENERIC E RETORNANDO OUTRA GENERIC
function identidadeGeneric(parametro) {
    return parametro;
}
//GENERIC PASSANDO ARRAY
function identidadeGenericArray1(parametro) {
    return parametro;
}
//GENERIC PASSANDO OUTRA FORMA DE ARRAY
function identidadeGenericArray2(parametro) {
    return parametro;
}
//FUNÇÃO GENERIC
var NumeroGenerico = /** @class */ (function () {
    function NumeroGenerico() {
    }
    return NumeroGenerico;
}());
var num = new NumeroGenerico();
num.valorZero = 0;
num.add = function (x, y) { return x + y; };
//CRIA FACTORY
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nameTag;
createInstance(Bee).keeper.hasMask;
