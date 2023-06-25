// парсинг через multer
const multer = require('multer')
let fs = require('fs')

let uniqueName

const storage = multer.diskStorage({
    // указываем в какую папку сохранять
    destination(req, file, cb) {
        // проверяем есть ли папка и создаем если нету
        if (!fs.existsSync('../client/public/media/posts')) {
            fs.mkdirSync(
                '../client/public/media/posts',
                { recursive: true },
                () => {}
            )
        }
        cb(null, '../client/public/media/posts')
    },

    // присваиваем имя
    filename(req, file, cb) {
        uniqueName ='posts-' + Date.now() + '-' + Math.round(Math.random() * 1e9) + '-' + file.originalname
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
