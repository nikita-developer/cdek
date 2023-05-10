const UserModel = require('../models/user-model')

class ProfileServices {
    async settings(profile) {
        // поиск пользователя в базе
        const candidate = await UserModel.findOne({email: profile.email})

        return candidate
    }
}

module.exports = new ProfileServices()
