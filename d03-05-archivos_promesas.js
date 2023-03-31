//const fs = require('fs')
import fs from 'fs'

const filename = './ejemplo3.txt'

const operacionAsync = async() => {
    await fs.promises.writeFile(filename, 'Hola mundo')
    let contenido = await fs.promises.readFile(filename, 'utf-8')
    console.log(contenido)
    await fs.promises.appendFile(filename, 'Seguimos escribiendo')
    contenido = await fs.promises.readFile(filename, 'utf-8')
    console.log(contenido)
    await fs.promises.unlink(filename)
}

operacionAsync()
console.log('END')