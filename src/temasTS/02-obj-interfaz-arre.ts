
interface Alumno{
    nombre:string;
    edad:number;
    activo:boolean;
    email?:string;
    nota:number;
}


const alumno:Alumno={
    nombre:"Juan",
    edad:23,
    activo:true,
    nota:8.5
}

console.log(alumno);

let mascotas:string[]=['perro','gato','loro'];
mascotas.push('pez');
console.log(mascotas);
mascotas[1]='hamster';
console.log(mascotas);

let edades:(number|string)[]=[23,45,12,'34'];
edades.push(67);
edades.push('89');
console.log(edades);
