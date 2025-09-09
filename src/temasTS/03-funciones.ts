
function sumar(a: number, b: number): number {
    return a + b;
}
console.log(sumar(2, 3));

const sumarFlecha = (a: number, b: number): number => a + b;
console.log(sumarFlecha(5, 7));

function multiplicar(n1: number, _n2?: number, base: number = 2): number {
    return n1 * base;
}
console.log(multiplicar(5));
console.log(multiplicar(5, 10, 3));
console.log(multiplicar(5, undefined, 3));

interface Mascota {
    nombre: string;
    edad: number;
    tipo: string;
    mostrarEdad: () => void;
}

function crearMascota(mascota: Mascota,x:number): void {
    mascota.edad += x;
    console.log(mascota);
    console.log(mascota.mostrarEdad());
}

const miMascota: Mascota = {
    nombre: 'Firulais',
    edad: 5,
    tipo: 'perro',
    mostrarEdad(){
        return `La edad de ${this.nombre} es ${this.edad} años.`;
    }
};

crearMascota(miMascota,3);


