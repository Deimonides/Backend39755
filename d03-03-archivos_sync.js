const fs = require('fs') //CommonJS, importación antigua
//import fs from 'fs' // ES Modules, forma de importación moderna

const filename = './ejemplo.txt'

//fs.writeFileSync('./ejemplo.txt', 'Hola mundo 3') // 1 arg = archivo, 2 arg = contenido

if (fs.existsSync(filename)) {
    let contenido = fs.readFileSync(filename, 'utf8')
    console.log(contenido)
    fs.appendFileSync(filename, 'Nuevo hola mundo') //agrega contenido
    contenido = fs.readFileSync(filename, 'utf8')
    console.log(contenido)
    fs.unlinkSync(filename) //elimina el archivo
} else {
    console.log('El archivo no existe.')
}


console.log('END')