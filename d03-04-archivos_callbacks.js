const fs = require('fs')

const filename = './ejemplo2.txt'

fs.writeFile(filename, 'Hola mundo', error => {
    if (error) return console.log('Hubo un error')
    console.log('Archivo creado correctamente')
    fs.appendFile(filename, 'Hola otros mundos', error => {
        if (error) return console.log('Hubo un error')
        console.log(contenido)
    })
})