
class Persona{
    nombre:string;
    edad:number;

    constructor(nombre:string,edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log(`${this.nombre}, ${this.edad} años`);
    }
}

let persona:Persona;
persona=new Persona('Piruli',25);
persona.imprimir();