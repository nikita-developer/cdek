const UserModel = require('../models/user-model')
const UserDto = require('../dtos/user-dto')

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
        if (req.file) {
            user.image = req.file.filename
        }

        // сохраняем
        await user.save()

        // фильтруем объект и отдаем только те данные которые прописаны в dto
        return new UserDto(user)
    }
}

module.exports = new ProfileServices()
