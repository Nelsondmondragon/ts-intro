function sumar(a:number,b:number): number{
    return a+b;
}

const sumarArrow = (a:number,b:number):number => {
    return a+b;
}

function multiplicar(numero:number,otroNumero?:number,base:number = 2):number{
    return numero*base;
}

console.log(multiplicar(10,20));
console.log(sumar(10,12));