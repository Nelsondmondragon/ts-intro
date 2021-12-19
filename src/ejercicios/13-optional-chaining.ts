 interface Pasajero {
     nombre: string;
     hijos?: string[];
 }

 const pasajero1: Pasajero = {
     nombre: 'Nelson'
 }

  const pasajero2: Pasajero={
      nombre: 'Melissa',
      hijos: ['Cristian','Jose']
  }

  function imprimirHijos(pasajeros: Pasajero): void{
      const cuantosHijos = pasajeros.hijos?.length;
      console.log(cuantosHijos);
  }

imprimirHijos(pasajero1);