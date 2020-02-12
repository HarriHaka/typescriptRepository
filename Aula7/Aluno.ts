/// <reference path="Pessoa.ts"/>
module Escola{
	export class Aluno extends Escola.Pessoa{
		private _matricula:string;
		
		constructor(nome:string,matricula:string){
			super(nome)
			this._matricula = matricula;
		}
	}
}