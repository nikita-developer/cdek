const UserModel = require('../models/user-model')
const UserDto = require('../dtos/user-dto')

class ProfileServices {
    async settings(profile) {
        // поиск пользователя в базе
        const user = await UserModel.findOne({ email: profile.email })

        // меняем данные пользователя
        user.name = profile.name
        user.surname = profile.surname
        user.age = profile.age
        user.phone = profile.phone
        user.about = profile.about
        user.image = profile.file

        // сохраняем
        await user.save()

        // фильтруем объект и отдаем только те данные которые прописаны в dto
        return new UserDto(user)
    }
}

module.exports = new ProfileServices()
