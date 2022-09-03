class User {
    #password = '12345678'

    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get password() {
        return this.#password
    }

    set password(pass) {
        this.#password = pass
    }
}


const user = new User('Stas')
const user2 = new User('Sasha')
const user3 = new User('Andrii')


console.log(user.password)

user.password = '87654321'

console.log(user.password)