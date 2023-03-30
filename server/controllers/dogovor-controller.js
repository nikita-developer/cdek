const dogovorService = require("../service/dogovor-service");

class DogovorController {
    async dogEmployed (req, res, next) {
        try {
            // получаем данные с формы
            const {fio, inn, birth, phone, email, passnumber, passdata, passwho, adres, site, bank, numberschet, korschet, bik, comment} = req.body
            // вызываем функцию и отправляем сообщение
            const sendEmployed = await dogovorService.dogEmployed(fio, inn, birth, phone, email, passnumber, passdata, passwho, adres, site, bank, numberschet, korschet, bik, comment)
            // ответ
            return res.json(sendEmployed)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new DogovorController()
