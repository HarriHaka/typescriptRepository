//APRESENTAÇÃO

class Pessoa{
	nomeCompleto:string;
	
	constructor(public nome:string, public sobreNome:string){
		this.nomeCompleto = nome +' '+sobreNome;
	} 
	
}

var aluno = new Pessoa("teste1","teste2")



//TIPOS PRIMITIVOS

let isDone : boolean = false;

//Inteiros, decimais, floats, hexadecimal, binário
let  nm: number = 12;

let nome:string = "preto"

let concatena : string ="Oi ${nome}"

let sentence:string ="Olá"+nome

//ENUM

enum enumColor {Vermelho,Amarelo,Cinza}

let c: enumColor = enumColor.Vermelho