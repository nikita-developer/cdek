const nodemailer = require('nodemailer')

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            }
        })
    }

    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Активация аккаунта на ' + process.env.API_URL,
            text: '',
            html:
                `
                    <div>
                        <h1>Для активации перейдите по ссылке</h1>
                        <a href="${link}">${link}</a>
                    </div>
                `
        })
    }

    async sendEmployed(fio, inn, birth, phone, email, passnumber, passdata, passwho, adres, site, bank, numberschet, korschet, bik, comment) {
        try {
            await this.transporter.sendMail({
                from: process.env.SMTP_USER,
                to: process.env.DOGOVOR_MAIL,
                subject: 'Заявка от самозанятого',
                text: '',
                html:
                    `
                    <div>
                        <h1>Заявка самозанятого</h1>
                        <p>${fio}</p>
                        <p>${inn}</p>
                        <p>${birth}</p>
                        <p>${phone}</p>
                        <p>${email}</p>
                        <p>${passnumber}</p>
                        <p>${passdata}</p>
                        <p>${passwho}</p>
                        <p>${adres}</p>
                        <p>${site}</p>
                        <p>${bank}</p>
                        <p>${numberschet}</p>
                        <p>${korschet}</p>
                        <p>${bik}</p>
                        <p>${comment}</p>
                    </div>
                `
            })
            return 'Заявка отправлена'
        } catch (e) {
            return 'Произошла ошибка'
        }
    }
}

module.exports = new MailService()
