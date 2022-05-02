/*Generics with Classes Example *//* 
class Pessoa<T extends string | number> {
    idade : T;
    

    constructor(idade:T){
        this.idade = idade;
    }

    setIdade(idade: T){
        this.idade = idade;
    }
}


let pessoa = new Pessoa(6);
console.log(pessoa.idade);
/**After using extends over the custom Type, and using it on the constructor, it can't be changed anymore */
//pessoa.setIdade(6); 


/**Generics With Functions */
/**In this Example generic T over the function let the funcion works with diferent type of data */

/* let carros: string[] = ['Gol', 'Fiesta', ' Up'];
let numPrimos: number[] = [2, 3, 5];

function pegarPrimeiroElemento<T >(lista:T[]): T{
    return lista[0];
}

console.log(pegarPrimeiroElemento(carros));
console.log(pegarPrimeiroElemento(numPrimos)); */