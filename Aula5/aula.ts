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


class Pessoa{
	
	constructor(public documento:string){
		
	}
}

class Cliente2 extends Pessoa{
	static qtdDeDependentes : number = 0;
	private _nome:string;
	
	constructor(nome:string,documento:string){
		super(documento); //Chama o construtor da classe herdada
		this._nome=nome;
	}
	registrar():void{
	}
}