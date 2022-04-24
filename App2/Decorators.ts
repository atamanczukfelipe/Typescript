/*Decorator Syntax
@name (params)
*/
/* function greeting( msg:string){
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
console.log(tvSony); */

/* Property Decorator Example */
function minSize(size: number){
    return(target: any, key:any) => {
        let val = target[key]

        const getter = () => val;
        const setter = (value:number) =>{
            if (value < size) {
                console.log(`O tamanho da tela deve ser maior que ${size} polegdas`)
            }else{
                val = value
                console.log(`O tamanho da tela é ${size} polegadas`)
            }
        }

        Object.defineProperty(target, key,{
            get: getter,
            set: setter

        });
    }

}
class LG{
    @minSize(32)
    size: number;

    constructor(size: number){
        this.size = size;
    }
}

let LGTV = new LG(55);

console.log(LGTV.size);