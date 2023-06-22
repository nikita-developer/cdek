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
        const post = await PostModel.create({
            description: req.data.description,
            face: req.data.image,
            media: req.data.media,
            name: req.data.name,
            surname: req.data.surname,
            title: req.data.title,
            date: showTime(),
        })

        return post
    }
}

module.exports = new PostService()