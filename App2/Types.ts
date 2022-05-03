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

/* Type Guards Example (type of)*/

/* function showStatus(status: number | boolean){
    if(typeof status === 'number'){
        console.log(status.toExponential(2));
        console.log(`Status é um number: ${status}`);
    }else if (typeof status === 'boolean'){
        console.log(status.valueOf());
        console.log(`Status é um boolean: ${status}`);
    }   
}

showStatus(4);
showStatus(true); */

type PFisica ={
    nome : string;
    cpf: string;
}

type PJuridica ={
    nome : string;
    cnpj: string;
}

const PF: PFisica ={
    nome: 'Felipe',
    cpf: '0000000000'
}

const PJ: PJuridica={
    nome: 'Empresa X',
    cnpj: '999999999999'
}

function showPessoa(pessoa: PFisica| PJuridica){
    if((pessoa as PFisica).cpf){
        console.log((pessoa as PFisica).nome);
        console.log((pessoa as PFisica).cpf);
    }else{
        console.log((pessoa as PJuridica).nome);
        console.log((pessoa as PJuridica).cnpj);
    }
}

showPessoa(PF);

showPessoa(PJ);