//APRESENTAÇÃO
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobreNome) {
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.nomeCompleto = nome + ' ' + sobreNome;
    }
    return Pessoa;
}());
var aluno = new Pessoa("teste1", "teste2");
//TIPOS PRIMITIVOS
var isDone = false;
//Inteiros, decimais, floats, hexadecimal, binário
var nm = 12;
var nome = "preto";
var concatena = "Oi ${nome}";
var sentence = "Olá" + nome;
