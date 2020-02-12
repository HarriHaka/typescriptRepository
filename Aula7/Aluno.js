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
/// <reference path="Pessoa.ts"/>
var Escola;
(function (Escola) {
    var Aluno = /** @class */ (function (_super) {
        __extends(Aluno, _super);
        function Aluno(nome, matricula) {
            var _this = _super.call(this, nome) || this;
            _this._matricula = matricula;
            return _this;
        }
        return Aluno;
    }(Escola.Pessoa));
    Escola.Aluno = Aluno;
})(Escola || (Escola = {}));
