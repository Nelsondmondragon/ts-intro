/*
    ===== Código de TypeScript =====
*/

interface Producto {
    desc: string;
    precio: number;

}

const tableta:Producto ={
    desc: 'Ipad Air',
    precio: 350
}

const telefono:Producto ={
    desc: 'Iphone 12',
    precio: 550
}

function calculaISV(productos: Producto[]): [number,number]{
    let total = 0;

    productos.forEach( ({precio}) =>{
        total += precio;
    })

    return [total, total* 0.15];
}

const articulos = [telefono, tableta];

const [total, isv] = calculaISV(articulos);

console.log('total', total);
console.log('ISV', isv);