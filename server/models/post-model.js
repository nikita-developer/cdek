const {Schema, model} = require('mongoose')

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

const PostSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    face: {type: String, default: 'Не указано'},
    date: {type: String, default: showTime()},
    name: {type: String, default: 'Не указано'},
    surname: {type: String, default: 'Не указано'},
    title: {type: String, default: 'Не указано'},
    description: {type: String, default: 'Не указано'},
    media: {type: String, default: ''},
    like: {type: Number, default: 0},
    dislike: {type: Number, default: 0},
})

module.exports = model('Post', PostSchema)