"use strict";
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
let Dog = {
    nome: "Caramelo",
    idade: 0,
    isAlive: false,
    born() {
        this.isAlive = true;
        return console.log(`o ${this.nome} Nasceu!`);
    },
    grow() {
        this.idade++;
        return console.log(`o ${this.nome} ficou mais velho, ele está com ${this.idade} anos `);
    },
    die() {
        this.isAlive = false;
        this.idade = 0;
        return console.log(`o ${this.nome} Morreu!`);
    }
};
Dog.born();
for (let i = 0; i < 9; i++) {
    Dog.grow();
}
if (Dog.idade == 9) {
    Dog.die();
}
else {
    Dog.grow();
}
