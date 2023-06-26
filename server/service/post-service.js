const PostModel = require('../models/post-model')

const showTime = () => {
    const monthsArr = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    const daysArr = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let dateObj = new Date();
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth();
    let numDay = dateObj.getDate();
    let day = dateObj.getDay();
    let hour = dateObj.getHours();
    let minute = dateObj.getMinutes();
    let second = dateObj.getSeconds();
    if (minute < 10) minute = "0" + minute;
    if (second < 10) second = "0" + second;
    let out = daysArr[day] + ", " + numDay + " " + monthsArr[month] + " " + year + ", " + hour + ":" + minute + ":" + second;
    return out;
}

class PostService {
    async createPost(req) {
        // проверка на файл
        if (req.file) req.body.media = req.file.filename

        // создаем пост
        return await PostModel.create(req.body)
    }

    async getPost(req) {
        // поиск постов
        return await PostModel.find(req.body.user)
    }
}

module.exports = new PostService()