module.exports = class UserDto {
    email;
    id;
    isActivated;
    role;
    name;
    surname;
    phone;
    age;
    about;
    image;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
        this.role = model.role;
        this.name = model.name;
        this.surname = model.surname;
        this.phone = model.phone;
        this.age = model.age;
        this.about = model.about;
        this.image = model.image;
    }
}