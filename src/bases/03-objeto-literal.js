const persona = {
    nombre: 'Fernando',
    apellido: 'Gomez',
    edad: 24,
    direccion: {
        ciudad: 'Colombia',
        zip: '050030',
    }
};  

let copiaPersona = { ...persona };
copiaPersona.nombre = 'Lucia'


console.log( { copiaPersona } );