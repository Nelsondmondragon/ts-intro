/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Juan','Nelson','Cristian'];

interface Personaje{
    nombre:string;
    hp:number;
    habilidades:string[];
    puebloNatal?:string;
}
const personaje:Personaje = {
    nombre:'Nelson',
    hp:100,
    habilidades: ['Bash','Counter','Healing']
}

personaje.puebloNatal='Cartagena del chaira';

console.table(personaje);