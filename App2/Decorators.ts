import { setSourceMapRange } from "./node_modules/typescript/lib/typescript";

/*Decorator Syntax
@name (params)
*/
function greeting( msg:string){
    return (target: any)=> {
        console.log(`${msg} - ${target}`);
    }
}

function setOS(os: string){
    return (target: any) => {
        return class extends target{
            version = os;
        }
    }
}

//Decorator Greeting
@greeting('Olá seja bem vindo!')
class Pessoa{

}
@setOS('WebOs 2.0')
class Lg{

}
let tvLg = new Lg();
console.log(tvLg);
@setOS('Android TV 3.0')
class Sony{

}

let tvSony = new Sony();
console.log(tvSony);