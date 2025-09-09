
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    epoca: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Coqueta',
    detalles: {
        autor: 'Keso Kubano',
        epoca: 1990
    }
};
console.log('El volumen actual es: ', reproductor.volumen);
console.log('El segundo actual es: ', reproductor.segundo);
console.log('La canción actual es: ', reproductor.cancion);
console.log('El autor es: ', reproductor.detalles.autor);
console.log('La época es: ', reproductor.detalles.epoca);

//Desestructuración
const { volumen, segundo, cancion, detalles } = reproductor;
const { autor, epoca } = detalles;
console.log('El volumen actual es: ', volumen);
console.log('El segundo actual es: ', segundo);
console.log('La canción actual es: ', cancion);
console.log('El autor es: ', autor);
console.log('La época es: ', epoca);

//Desestructuración de objetos
const anm: string[] = ['Rudeus', 'Subaru', 'Ainz'];

console.log('Personaje 1: ', anm[0]);
console.log('Personaje 2: ', anm[1]);
console.log('Personaje 3: ', anm[2]);

//Desestructuración de arreglos
const [p1, p2, p3] = anm;
console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);

