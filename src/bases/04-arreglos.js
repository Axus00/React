//Arreglos en JS
const arreglo = [1,2,3,4];

let arregloDos = [...arreglo, 5];

const arreglo3 = arregloDos.map( function(number) {
    return number * 2
});
console.log(arreglo3);