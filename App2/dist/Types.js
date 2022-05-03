"use strict";
/**Type Alias Example */
/* type Idade = number | string;

function exibirPessoa(nome: string, idade:Idade){
    console.log(`O nome é ${nome} e tem ${idade} anos`);
}

function exibirAnimal(nome: string, idade:Idade, especie: string){
    console.log(`O nome é ${nome}, ${especie} e tem ${idade} anos`);
}

exibirPessoa('Felipe', 30);
exibirAnimal('Rex', 2, 'mamifero'); */
const PF = {
    nome: 'Felipe',
    cpf: '0000000000'
};
const PJ = {
    nome: 'Empresa X',
    cnpj: '999999999999'
};
function showPessoa(pessoa) {
    if ('cpf' in pessoa) {
        console.log(pessoa.nome);
        console.log(pessoa.cpf);
    }
    else {
        console.log(pessoa.nome);
        console.log(pessoa.cnpj);
    }
}
showPessoa(PF);
showPessoa(PJ);
