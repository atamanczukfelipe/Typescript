/*Decorator Syntax
@name (params)
*/
function greeting( msg:string){
    return (target: any)=> {
        console.log(`${msg} - ${target}`);
    }
}

@greeting('Olá seja bem vindo!')
class Pessoa{

}