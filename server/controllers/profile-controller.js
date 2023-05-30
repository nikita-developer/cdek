const profileSettings = require('../service/profile-services')

class ProfileController {
    async settings(req, res, next) {
        try {
            // const settingsProfile = await profileSettings.settings(req.body.profile)
            return res.json(req.body)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new ProfileController()
