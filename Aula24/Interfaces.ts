module Curso{
	export interface IPessoa{
		nome:string,
		email:string,
		idade?:number,
		registrar():void;
	}
	export interface IPessoaFisica{
		cpf:string;
	}
	export interface IPessoaJuridica{
		cnpj:string;
}
}