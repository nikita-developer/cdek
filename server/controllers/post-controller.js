const postService = require('../service/post-service')

class PostController {
    async createPost(req, res, next) {
        try {
            const post = await postService.createPost(req.body)
            return res.json(post)
        } catch(e) {
            next(e)
        }
    }
}

module.exports = new PostController()