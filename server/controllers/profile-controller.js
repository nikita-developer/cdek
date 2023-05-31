const profileSettings = require('../service/profile-services')

class ProfileController {
    async settings(req, res, next) {
        try {
            const settingsProfile = await profileSettings.settings(req.body)
            return res.json(settingsProfile)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new ProfileController()
