//Funciones
const saludar = function(nombre){
    return `Hola, ${nombre}`
}
console.log(saludar('Fernando'))

const saludarDos = (nombre) => {return `Hola, ${nombre}`}
console.log(saludarDos('Angélica')) 

const saludarTres = (nombre) => `Hola, ${nombre}`
console.log(saludarDos('Thor')) 

const getUser = () => ({
    user: 'Fernando',
    email: 'fjgt2000@gmail.com'
});
console.log(getUser())

//Tarea
//transforma a una función flecha
//retornar un objeto implícito
//hacer pruebas
function getUsuarioActivo( nombre ){
    return {
        id: '123ABC',
        username: nombre
    }
};

const obtenerUsuario = (nombre) => ({
    id:'123ABC',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(obtenerUsuario('Fernando'))