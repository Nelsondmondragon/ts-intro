interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor ={
    volumen: 90,
    segundo: 23,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed sherran',
        anio: 2021
    }

}
const {volumen, segundo, cancion, detalles} = reproductor;
const {autor} = detalles;

console.log('El volumen actual de:', volumen );
console.log('El segundo actual de:', segundo);
console.log('La cancion actual de:', cancion);
console.log('El autor es:', autor);