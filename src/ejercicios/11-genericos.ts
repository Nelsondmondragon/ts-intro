 
function queTipoSoy<T>(parametro: T) {
    return parametro;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumber = queTipoSoy(100);

let soyNumber2 = queTipoSoy<number>(23232);

  