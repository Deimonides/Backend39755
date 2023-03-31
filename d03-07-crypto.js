import crypto from 'crypto'

const BD = []

class UserManager {
    getUsers = () => BD

    insertUser = user => {
        user.salt = crypto.randomBytes(128).toString('base64')
        user.password = crypto.createHmac('sha256', user.salt).update(user.password).digest('hex')
        BD.push(user)
    }

    validateUser = (username, password) => {
        const user = BD.find(item => item.username === username)
        if (!user) {
            console.log('User not found')
            return
        }

        const newHash = crypto.createHmac('sha256', user.salt).update(password).digest('hex')
        if (newHash == user.password) console.log('Logged!!!')
        else console.log('Invalid password')
    }
}

const manager = new UserManager()
console.log(manager.getUsers())
manager.insertUser({
    name: 'Alex',
    lastname: 'Marin',
    username: 'alexmarinmendez',
    password: 'c0d3r'
})
console.log(manager.getUsers())
manager.validateUser('profesorcoder', 'c0d3r')