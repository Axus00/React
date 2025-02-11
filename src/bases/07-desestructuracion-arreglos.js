const personajes = ['Thor', 'Gato', 'Perro'];

const [ , p2, p3 ] = personajes;
console.log( p2 );

const retornaArreglo = () => {
    return ['ABC', 123]
};

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

//Tarea
//el primer valor del arreglo se debe llamar nombre
//el segundo se llamará setNombre
const useState = (valor) => {
    return [ valor, ()=>{console.log('Hola Mundo')} ];
}
const [ nombre, setNombre ] = useState('Fernando');
console.log(nombre);