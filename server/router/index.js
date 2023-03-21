const Router = require('express').Router
const userController = require('../controllers/user-controller')
const router = new Router()
const {body} = require('express-validator')
const authMiddleware = require('../middleware/auth-middleware')

router.post('/registration',
    body('email').isEmail().withMessage('Введите корректный email'),
    body('password').isLength({min: 8, max: 32}).withMessage('Пароль не должен быть меньше 8 и больше 32 символов'),
    userController.registration)
router.post('/login',
    body('email').isEmail().withMessage('Введите корректный email'),
    body('password').isLength({min: 8, max: 32}).withMessage('Пароль не должен быть меньше 8 и больше 32 символов'),
    userController.login)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.post('/send-link-active', userController.sendLinkActive)
router.get('/refresh', userController.refresh)
router.get('/users', authMiddleware, userController.getUsers)

module.exports = router
