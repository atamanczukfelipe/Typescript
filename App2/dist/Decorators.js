"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Property Decorator Example */
/* function minSize(size: number){
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

console.log(LGTV.size); */
/**Decorators With Functions */
function delay(time) {
    return (target, key, descriptor) => {
        let method = descriptor.value;
        descriptor.value = function (...args) {
            setTimeout(() => {
                method.apply(this, args);
            }, time);
        };
        return descriptor;
    };
}
class Timer {
    newTimer(cont) {
        if (cont === 0) {
            return 0;
        }
        else {
            console.log(`Contador em ${cont}`);
            return this.newTimer(cont - 1);
        }
    }
}
__decorate([
    delay(2000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Number)
], Timer.prototype, "newTimer", null);
let T = new Timer();
T.newTimer(5);
