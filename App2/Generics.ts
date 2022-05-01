/*Generics with Classes Example */
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
pessoa.setIdade(6);