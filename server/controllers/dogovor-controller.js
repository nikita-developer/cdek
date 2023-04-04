const mailService = require('../service/mail-service')
const {validationResult} = require("express-validator");
const ApiError = require("../exceptions/api-error");

class DogovorController {
    async dogEmployed (req, res, next) {
        try {
            // проверка на ошибки
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }
            // получаем данные с формы
            const {fio, inn, birth, phone, email, passnumber, passdata, passwho, adres, site, bank, numberschet, korschet, bik, comment} = req.body
            // вызываем функцию и отправляем сообщение
            // const result = await mailService.sendEmployed(fio, inn, birth, phone, email, passnumber, passdata, passwho, adres, site, bank, numberschet, korschet, bik, comment).catch(console.error);
            // ответ
            return res.json(fio, inn, birth, phone, email, passnumber, passdata, passwho, adres, site, bank, numberschet, korschet, bik, comment)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new DogovorController()
