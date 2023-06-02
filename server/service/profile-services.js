const UserModel = require('../models/user-model')
const UserDto = require('../dtos/user-dto')
let fs = require('fs')

class ProfileServices {
    async settings(req) {
        // поиск пользователя в базе
        const user = await UserModel.findOne({ email: req.body.email })

        // меняем данные пользователя
        user.name = req.body.name
        user.surname = req.body.surname
        user.age = req.body.age
        user.phone = req.body.phone
        user.about = req.body.about

        // проверка на файл
        if (req.file) {
            // проверка и удаление старого файла
            if (fs.existsSync(`../client/public/media/profile/${user.image}`)) {
                fs.unlink(`../client/public/media/profile/${user.image}`, err => {
                    if(err) throw err;
                });
            }
            user.image = req.file.filename
        }

        // сохраняем
        await user.save()

        // фильтруем объект и отдаем только те данные которые прописаны в dto
        return new UserDto(user)
    }
}

module.exports = new ProfileServices()
