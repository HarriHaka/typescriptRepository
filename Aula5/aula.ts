class Cliente{
	private _nome:string;
	private _idade:number;
	
	constructor(nome:string, idade:number){
		this._nome = nome;
		this._idade = idade;
	}
	
	get nome():string{
		return this._nome;
	}
	
	get idade():number{
		return this._idade;
	}
	
	set nome(nome:string){
		this._nome = nome
	}
	
	set idade(idade:number){
		this._idade=idade
	}
	
	registrar(){
	}
}



