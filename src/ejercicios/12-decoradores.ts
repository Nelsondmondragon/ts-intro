
function classDecorator<T extends { new (...args: any[]): {}}>(
    constructor: T
){
    return class extends constructor{
        newPorperty = 'new property';
        hello = 'override';
    };
}


@classDecorator
class MiSuperClase{
    public miPropiedad: string = 'AJNSDF';

    imprimir(){
        console.log
    }
}
console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);