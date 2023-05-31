<template>
    <div class="profile">
        <div class="profile__head">
            <div class="profile__face">
                <div class="profile__face-media">
                    <img :src="photo" alt="Пользователь" />
                    <label class="profile__add-image">
                        <span>Изменить картинку</span>
                        <input
                            hidden
                            type="file"
                            accept="image/*"
                            @change="upload"
                        />
                    </label>
                </div>
                <small class="text-danger" v-if="errorMessage">{{
                    errorMessage
                }}</small>
            </div>
            <ul class="list-group list-group-flush profile__head-info">
                <li class="list-group-item profile__name">
                    <span class="list-group-item__first-text">Имя:</span>
                    <span v-if="!profile.name.isEdits">
                        {{ profile.name.text }}
                    </span>
                    <input
                        v-if="profile.name.isEdits"
                        class="list-group-item__field"
                        v-model="profile.name.text"
                        type="text"
                        placeholder="Как вас зовут"
                    />
                    <span
                        class="material-symbols-outlined"
                        :class="{ edits: profile.name.isEdits }"
                        @click="profile.name.isEdits = !profile.name.isEdits"
                    >
                        edit
                    </span>
                </li>
                <li class="list-group-item profile__name">
                    <span class="list-group-item__first-text">Фамилия:</span>
                    <span v-if="!profile.surname.isEdits">
                        {{ profile.surname.text }}
                    </span>
                    <input
                        v-if="profile.surname.isEdits"
                        class="list-group-item__field"
                        v-model="profile.surname.text"
                        type="text"
                        placeholder="Ваша фамилия"
                    />
                    <span
                        class="material-symbols-outlined"
                        :class="{ edits: profile.surname.isEdits }"
                        @click="
                            profile.surname.isEdits = !profile.surname.isEdits
                        "
                    >
                        edit
                    </span>
                </li>
                <li class="list-group-item profile__name">
                    <span class="list-group-item__first-text">Возраст:</span>
                    <span v-if="!profile.age.isEdits">
                        {{ profile.age.text }}
                    </span>
                    <input
                        v-if="profile.age.isEdits"
                        class="list-group-item__field"
                        v-model="profile.age.text"
                        type="text"
                        placeholder="Сколько вам лет"
                    />
                    <span
                        class="material-symbols-outlined"
                        :class="{ edits: profile.age.isEdits }"
                        @click="profile.age.isEdits = !profile.age.isEdits"
                    >
                        edit
                    </span>
                </li>
                <li class="list-group-item profile__name">
                    <span class="list-group-item__first-text">Роль:</span>
                    <span>{{ user.role }}</span>
                </li>
                <li class="list-group-item profile__name">
                    <span class="list-group-item__first-text">Телефон:</span>
                    <span v-if="!profile.phone.isEdits">
                        {{ profile.phone.text }}
                    </span>
                    <input
                        v-if="profile.phone.isEdits"
                        class="list-group-item__field"
                        v-model="profile.phone.text"
                        type="text"
                        placeholder="Ваш телефон"
                    />
                    <span
                        class="material-symbols-outlined"
                        :class="{ edits: profile.phone.isEdits }"
                        @click="profile.phone.isEdits = !profile.phone.isEdits"
                    >
                        edit
                    </span>
                </li>
                <li class="list-group-item profile__name">
                    <span class="list-group-item__first-text">Обо мне:</span>
                    <span v-if="!profile.about.isEdits">
                        {{ profile.about.text }}
                    </span>
                    <textarea
                        v-if="profile.about.isEdits"
                        class="list-group-item__field"
                        v-model="profile.about.text"
                        type="text"
                        placeholder="Напишите что-нибудь о себе"
                    ></textarea>
                    <span
                        class="material-symbols-outlined"
                        :class="{ edits: profile.about.isEdits }"
                        @click="profile.about.isEdits = !profile.about.isEdits"
                    >
                        edit
                    </span>
                </li>
                <li class="list-group-item profile__name">
                    <span
                        class="list-group-item__first-text"
                        v-if="user.isActivated"
                        >Аккаунт подтвержен</span
                    >
                    <span class="list-group-item__first-text" v-else
                        >Аккаунт не подтвержен</span
                    >
                </li>
                <li class="list-group-item profile__name">
                    <div class="profile__save">
                        <button
                            :disabled="!success"
                            class="btn btn-primary"
                            @click="submit"
                        >
                            Сохранить
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
let user = useUser().value

const profile = ref({
    name: {
        text: user.name,
        isEdits: false,
    },
    surname: {
        text: user.surname,
        isEdits: false,
    },
    age: {
        text: user.age,
        isEdits: false,
    },
    phone: {
        text: user.phone,
        isEdits: false,
    },
    about: {
        text: user.about,
        isEdits: false,
    },
    email: user.email,
    image: '',
})

const photo = ref(user.image)
let errorMessage = ref('')
let success = ref(true)

let formData = new FormData()

const submit = async () => {
    if (success) {
        success.value = false

        formData.append('name', profile.value.name.text)
        formData.append('surname', profile.value.surname.text)
        formData.append('age', profile.value.age.text)
        formData.append('phone', profile.value.phone.text)
        formData.append('about', profile.value.about.text)
        formData.append('email', profile.value.email)

        const settings = {
            method: 'POST',
            credentials: 'include',
            body: formData,
        }
        try {
            const fetchResponse = await fetch(
                `${config.API_URL}/profile`,
                settings
            )
            const data = await fetchResponse.json()
            if (fetchResponse.status === 200) {
                console.log(data)
            }
        } catch (e) {
            return e
        }
        success.value = true
        profile.value.name.isEdits = false
        profile.value.surname.isEdits = false
        profile.value.age.isEdits = false
        profile.value.phone.isEdits = false
        profile.value.about.isEdits = false
    }
}

const upload = async (e) => {
    if (e.target.files[0]) {
        if (e.target.files[0].size > 5000000) {
            return (errorMessage.value = 'Картинка больше чем 5мб')
        } else {
            errorMessage.value = ''
        }

        formData.append('image', e.target.files[0])
        const reader = new FileReader()
        reader.onload = () => (photo.value = reader.result)
        reader.readAsDataURL(e.target.files[0])
    }
}
</script>

<style scoped lang="scss">
.profile {
    &__head {
        display: flex;
        column-gap: 30px;

        @media (max-width: 768px) {
            flex-direction: column;
        }
    }

    &__face {
        flex-shrink: 0;
        position: sticky;
        top: 15px;

        & small {
            display: block;
            text-align: center;
            margin-top: 3px;
        }

        &-media {
            position: relative;
            width: 300px;
            height: 300px;

            &:hover {
                & .profile__add-image {
                    opacity: 1;

                    & span {
                        &:hover {
                            opacity: 1;
                        }
                    }
                }
            }
        }

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        @media (max-width: 768px) {
            margin-bottom: 30px;
            margin-right: auto;
            margin-left: auto;
        }
    }

    &__add-image {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgb(0 0 0 / 50%);
        margin: 0;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: 0.3s;

        & span {
            background-color: #fff;
            color: #000;
            padding: 5px 10px;
            border-radius: 5px;
            font-weight: 700;
            opacity: 0.8;
        }
    }

    &__head-info {
        flex-grow: 1;
    }
}
.material-symbols-outlined {
    position: absolute;
    top: 16px;
    right: 0;
    color: #8d8d8d;
    cursor: pointer;
    user-select: none;

    &.edits {
        color: var(--primary);

        &:hover {
            color: var(--primary);
        }
    }

    &:hover {
        color: #000;
    }
}
.list-group-item {
    display: flex;
    padding-right: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 34px;

    &__first-text {
        margin-right: 10px;
    }

    &__field {
        flex-grow: 1;
        background-color: #f7f7f7;
        padding: 5px 10px;
        line-height: 24px;

        &:focus {
            outline: 0;
        }
    }
}
</style>
