/// <reference path="Interfaces.ts"/>

module Inicio{
	export class Funcionario implements Curso.IPessoa,Curso.IPessoaJuridica{

		constructor(public nome:string,public email:string,public cnpj:string,public idade?:number){
			
		}
		
		registrar():void{
			console.log("Funcionario registrado com sucesso");
		}
	}

	export class Aluno implements Curso.IPessoa, Curso.IPessoaFisica{
		
		constructor(public nome:string,public email:string,public cpf:string,public idade?:number){
		}
		
		registrar():void{
			console.log("Aluno registrado com sucesso");
		}
		
	}
}
let func1 = new Inicio.Funcionario("Harrison","harrison_hakanen@hotmail.com","0000000000000");
let func2 = new Inicio.Funcionario("Harri","harri_teste@hotmail.com","0000000000000",23)

