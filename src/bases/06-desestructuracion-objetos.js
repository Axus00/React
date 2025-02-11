//Desestructurar objetos
//Asignación Desestructurante
const persona = {
    nombre: 'Fernando',
    edad: 24,
    clave: 'Colombia'
};

const { nombre, edad, clave } = persona;


console.log(`La persona con el ${nombre} tiene una edad de ${edad} años.`);

const useContext = ({ nombre, edad, clave, rango = 'Developer' }) => {
    return {
        nombreClave: clave,
        anios: edad
    }
}
const { nombreClave, anios } = useContext(persona);
console.log(nombreClave, anios); 