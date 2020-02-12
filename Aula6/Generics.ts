//FUNÇÃO NORMAL
function identidade(parametro:number):number{
	return parametro;
}

//GENERIC PASSANDO PARAMETRO GENERIC E RETORNANDO OUTRA GENERIC
function identidadeGeneric<T>(parametro:T):T{
	return parametro;
}

//GENERIC PASSANDO ARRAY
function identidadeGenericArray1<T>(parametro:T[]):T[]{
	return parametro;
}

//GENERIC PASSANDO OUTRA FORMA DE ARRAY
function identidadeGenericArray2<T>(parametro:Array<T>):Array<T>{
	return parametro;
}

//GENERIC COM INTERFACE
interface identidadeGenericInterface<T>{
	<T>(parametro:T):T;
}

//FUNÇÃO GENERIC
class NumeroGenerico<T>{
	valorZero:T;
	
	add: (x : T, y : T)=>T;
}


let num = new NumeroGenerico<number>();

num.valorZero = 0;
num.add = function(x,y){return x+y};


//CRIA FACTORY

class BeeKeeper{
	hasMask : boolean;
}

class ZooKeeper{
	nameTag: string;
}

class Animal{
	numLegs: number;
}

class Bee extends Animal{
	keeper: BeeKeeper;
}

class Lion extends Animal{
	keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new ()=>A):A{
	return new c();
}

createInstance(Lion).keeper.nameTag;
createInstance(Bee).keeper.hasMask;