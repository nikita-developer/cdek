const postService = require('../service/post-service')
const ApiError = require("../exceptions/api-error");

class PostController {
    async createPost(req, res, next) {
        try {
            let errors = []
            // проверка на ошибки
            if(!req.body.title) errors.push({param: 'title', msg: 'Заголовок пустой'})
            if(!req.body.description) errors.push({param: 'description', msg: 'Описание пустое'})

            if(!req.body.title || !req.body.description) return next(ApiError.BadRequest('Ошибка при валидации', errors))

            const post = await postService.createPost(req)
            return res.json(post)
        } catch(e) {
            next(e)
        }
    }

    async getPost(req, res, next) {
        try {
            const post = await postService.getPost(req)
            return res.json(post)
        } catch(e) {
            next(e)
        }
    }
}

module.exports = new PostController()