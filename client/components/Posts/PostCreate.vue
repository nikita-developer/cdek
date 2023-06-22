<template>
<div class="post-create">
    <div class="post-create__item">
        <p class="post-create__placeholder">Заголовок поста</p>
        <input class="post-create__field" type="text" v-model="title">
    </div>
    <div class="post-create__item">
        <p class="post-create__placeholder">Описание поста</p>
        <textarea class="post-create__field" v-model="description"></textarea>
    </div>
    <div class="post-create__media">
<<<<<<< HEAD
        <label class="post-create__label">
            <span class="btn btn-primary">Добавить файл</span>
            <input type="file" hidden @change="upload">
        </label>
        <button class="btn btn-primary" @click="submit">Создать</button>
    </div>
    <div class="post-create__img" v-if="media">
        <div class="post-create__img-delete" @click="deleted"></div>
        <img :src="media" alt="">
    </div>
    <small class="text-danger" v-if="errorMessage">{{ errorMessage }}</small>
=======
        <label class="btn btn-primary">
            <input type="file" hidden @change="upload">
            Добавить файл
        </label>
        <button class="btn btn-primary" @click="submit">Создать</button>
    </div>
    <label class="post-create__img">
        <div class="post-create__img-delete"></div>
        <img :src="photo" alt="">
    </label>
>>>>>>> 11a9e3fa745296efa5ebfcd0dd185c58db74d2e3
</div>
</template>

<script setup>
<<<<<<< HEAD
let user = useUser().value
let config = useRuntimeConfig();

let description = ref('')
let title = ref('')

let errorMessage = ref('')
let formData = new FormData()
let media = ref('')
let success = ref(true)
let messageSucces = ref(false)
console.log(user);
=======
const user = useUser().value
const config = useRuntimeConfig();
const description = ref('')
const media = ref('/media/profile/profile-1686042429395-273351095-404.png')
const title = ref('')
let photo = ref('/media/profile/profile-1686042429395-273351095-404.png')
let errorMessage = ref('')
let formData = new FormData()
>>>>>>> 11a9e3fa745296efa5ebfcd0dd185c58db74d2e3

const submit = async () => {
    if(success) {
        success.value = false

        formData.append('description', unref(description))
        formData.append('face', user.image)
        formData.append('name', user.name)
        formData.append('surname', user.surname)
        formData.append('title', unref(title))
        
        const settings = {
            method: 'POST',
            credentials: 'include',
            body: formData,
        }
        try {
            const fetchResponse = await fetch(`${config.API_URL}/posts`, settings)
            const data = await fetchResponse.json()
            if (fetchResponse.status === 200) {
                messageSucces.value = true
                await useRefresh()
                setTimeout(() => messageSucces.value = false, 1500)
            }
        } catch (e) {
            return e
        }

        success.value = true
    }
}

const upload = async (e) => {
    if (e.target.files[0]) {
        if (e.target.files[0].size > 5000000) {
            return (errorMessage.value = 'Картинка больше чем 5мб')
        } else {
            errorMessage.value = ''
        }
        formData.delete('media')

        formData.append('media', e.target.files[0])
        const reader = new FileReader()
        reader.onload = () => (media.value = reader.result)
        reader.readAsDataURL(e.target.files[0])
    }
}

<<<<<<< HEAD
const deleted = () => {
    formData.delete('media')
    media.value = ''
=======
const upload = async (e) => {
    if (e.target.files[0]) {
        console.log(12342453);
        if (e.target.files[0].size > 5000000) {
            return (errorMessage.value = 'Картинка больше чем 5мб')
        } else {
            errorMessage.value = ''
        }
        formData.delete('image')

        formData.append('image', e.target.files[0])
        const reader = new FileReader()
        reader.onload = () => (photo.value = reader.result)
        reader.readAsDataURL(e.target.files[0])
    }
>>>>>>> 11a9e3fa745296efa5ebfcd0dd185c58db74d2e3
}
</script>

<style lang="scss" scoped>
@import '~/components/Posts/styles/post-create.scss'
</style>
