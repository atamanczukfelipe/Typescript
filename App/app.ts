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
/* enum prodStatus{
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

ChecarProd(3); */

//Interface

//Interface Declaration
interface IAnimal {
    //variables
    nome:string;
    idade: number;
    isAlive: boolean;

    //Methods
    born(): void;
    grow(): void;
    die(): void;
}

let Dog: IAnimal ={
    nome: "Caramelo",
    idade : 0,
    isAlive: false,

    born(){
        this.isAlive = true;
        return console.log(`o ${this.nome} Nasceu!`);
    },

    grow(){
        this.idade++;
        return console.log(`o ${this.nome} ficou mais velho, ele está com ${this.idade} anos `);
    },

    die(){
        this.isAlive = false;
        this.idade = 0;
        return console.log(`o ${this.nome} Morreu!`);
    }
}

Dog.born();
for(let i =0; i< 9; i++){
    Dog.grow();
}
if (Dog.idade == 9){
    Dog.die();
}else{
    Dog.grow();
}