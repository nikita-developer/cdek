<template>
<div class="post-create">
    <div class="post-create__item">
        <p class="post-create__placeholder">Заголовок поста</p>
        <input class="post-create__field" type="text" v-model="title">
        <small class="text-danger mb-0" v-if="errorsMessages.title">{{ errorsMessages.title }}</small>
    </div>
    <div class="post-create__item">
        <p class="post-create__placeholder">Описание поста</p>
        <textarea class="post-create__field" v-model="description"></textarea>
        <small class="text-danger mb-0" v-if="errorsMessages.description">{{ errorsMessages.description }}</small>
    </div>
    <div class="post-create__media">
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
</div>
</template>

<script setup>
import {errorsForm} from "../../utils/form";
let user = useUser().value
let config = useRuntimeConfig();

let description = ref('')
let title = ref('')

let errorMessage = ref('')
let formData = new FormData()
let media = ref('')
let success = ref(true)

let errorsMessages = ref({})

const emit = defineEmits(['closeCreate'])

const submit = async () => {
    if(success) {
        success.value = false

        formData.append('user', user.id)
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
                await useRefresh()
                // обнуляем
                formData = new FormData()
                errorsMessages.value = {}
                title.value = ''
                description.value = ''
                emit('closeCreate', false)
            } else {
                errorsMessages.value = errorsForm(data.errors)
                // обнуляем
                formData = new FormData()
            }
        } catch (e) {
            // обнуляем
            formData = new FormData()
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
const deleted = () => {
    formData.delete('media')
    media.value = ''
}
</script>

<style lang="scss" scoped>
@import '~/components/Posts/styles/post-create.scss'
</style>
