/// <reference path="Interfaces.ts"/>
var Inicio;
(function (Inicio) {
    var Funcionario = /** @class */ (function () {
        function Funcionario(nome, email, cnpj, idade) {
            this.nome = nome;
            this.email = email;
            this.cnpj = cnpj;
            this.idade = idade;
        }
        Funcionario.prototype.registrar = function () {
            console.log("Funcionario registrado com sucesso");
        };
        return Funcionario;
    }());
    Inicio.Funcionario = Funcionario;
    var Aluno = /** @class */ (function () {
        function Aluno(nome, email, cpf, idade) {
            this.nome = nome;
            this.email = email;
            this.cpf = cpf;
            this.idade = idade;
        }
        Aluno.prototype.registrar = function () {
            console.log("Aluno registrado com sucesso");
        };
        return Aluno;
    }());
    Inicio.Aluno = Aluno;
})(Inicio || (Inicio = {}));
var func1 = new Inicio.Funcionario("Harrison", "harrison_hakanen@hotmail.com", "0000000000000");
var func2 = new Inicio.Funcionario("Harri", "harri_teste@hotmail.com", "0000000000000", 23);
