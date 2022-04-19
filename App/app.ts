/* let nome: string;
let sobrenome: string;
let idade: number;
let maiorIdade: boolean;
let a: number;
let b: number;
let resultado: number;

nome = "Felipe";
sobrenome = "Atamanczuk"
idade = 30;
maiorIdade = true;

a = 10;
b = 15;

if(maiorIdade == true){
    console.log(`Acesso permitido à: ${nome} ${sobrenome} e tem idade: ${idade} ano(s)`);
}else{
    console.log(`Sem Acesso pois menor de idade: ${idade} ano(s)`);
}

function somar (a:number,b:number){
    return a+b;
}

resultado = somar(a,b);

console.log(resultado);

 */

//Working with Arrays
/* let arrayA: (number | string) []= [];

arrayA.push(1);
arrayA.push(30);
arrayA.push("Teste");

console.log(arrayA); */

//Type declaration
/* type TipoArray = (number | "Test String") [];

let a : TipoArray = [];

a.push(1);
a.push(8);
a.push(6);
a.push(2);
a.push("Test String");

console.log("Array A: ", a);

type Animal = {
    nome: String;
    idade : number;
    vivo?: boolean;
}

let Dog: Animal;

Dog= {
    nome : "Rex",
    idade : 10,
    vivo : true
};

console.log("Dog: ", Dog); */

//Enum Example
enum prodStatus{
    Ativo = 1,
    Inativo = 2,
    Indisponivel = 3
}

function ChecarProd(status: number){
    switch(status){
        case prodStatus.Ativo: 
            console.log("Produto Disponivel!");
            break;
        case prodStatus.Inativo: 
            console.log("Produto Não Encontrado");
            break;
        case prodStatus.Indisponivel: 
            console.log("Produto Indisponivel!");
            break;
    }
}

ChecarProd(3);