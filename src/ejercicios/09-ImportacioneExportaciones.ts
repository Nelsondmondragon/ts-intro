import { calculaISV, Producto } from './08-Desestructuracion-funcion';

const carritosCompra: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 45345
    },
    {
        desc: 'Telefono 2',
        precio: 345345
    }
];
const [total, isv] = calculaISV(carritosCompra);

console.log('Total', total);
console.log('ISV', isv);

