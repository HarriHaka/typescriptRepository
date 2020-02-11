var Cliente = /** @class */ (function () {
    function Cliente(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
    Object.defineProperty(Cliente.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (idade) {
            this._idade = idade;
        },
        enumerable: true,
        configurable: true
    });
    Cliente.prototype.registrar = function () {
    };
    return Cliente;
}());
