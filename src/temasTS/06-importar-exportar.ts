import { Producto, calcularISV2 } from "./05-desestructurar-funciones";


const carrito:Producto[]=[
    {nombre: 'Iphone 14', precio:1500},
    {nombre: 'Ipad Air', precio:800},
    {nombre: 'Macbook Pro', precio:2500}

];

const[total,isv]=calcularISV2(carrito);
console.log('Total: ',total);
console.log('ISV: ',isv);
