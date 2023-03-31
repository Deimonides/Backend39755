import fs from 'fs'

const obj = {
    name: 'Gerardo',
    lastname: 'Solotun',
    age: 38
}

//fs.writeFileSync('./demo_desafio.json', JSON.stringify(obj, null, '\t'))

const contenido = fs.readFileSync('./demo_desafio.json', 'utf-8')
contenido = json.parse(contenido)
contenido.age = 39

fs.writeFileSync('./demo_desafio.json', JSON.stringify(contenido, null, '\t'))
