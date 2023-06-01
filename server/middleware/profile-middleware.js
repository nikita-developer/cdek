// парсинг через multer
const multer = require('multer')
const UserModel = require('../models/user-model')

let uniqueName

const storage = multer.diskStorage({
    // указываем в какую папку сохранять
    destination(req, file, cb) {
        cb(null, '../client/public/media/profile/')
    },

    // присваиваем имя
    filename(req, file, cb) {
        uniqueName =
            'profile-' +
            Date.now() +
            '-' +
            Math.round(Math.random() * 1e9) +
            '-' +
            file.originalname
        cb(null, uniqueName)
    },
})

const types = ['image/png', 'image/jpeg', 'image/jpg']

const fileFilter = async (req, file, cb) => {
    if (types.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

module.exports = multer({ storage, fileFilter })
