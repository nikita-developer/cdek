const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    email: {type: String, unique: true, require: true},
    password: {type: String, require: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    role: {type: String, default: 'user'},
    name: {type: String, default: 'Не указано'},
    surname: {type: String, default: 'Не указано'},
    phone: {type: String, default: 'Не указано'},
    age: {type: String, default: 'Не указано'},
    about: {type: String, default: 'Не указано'},
    image: {type: String, default: 'https://avatars.githubusercontent.com/u/35835844?v=4'},
})

module.exports = model('User', UserSchema)