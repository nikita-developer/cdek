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
</div>
</template>

<script setup>
const user = useUser().value
const config = useRuntimeConfig();
const description = ref('')
const media = ref('/media/profile/profile-1686042429395-273351095-404.png')
const title = ref('')
let photo = ref('/media/profile/profile-1686042429395-273351095-404.png')
let errorMessage = ref('')
let formData = new FormData()

const submit = async () => {
    const data = {
        user: user.id,
        description: unref(description),
        face: user.image,
        media: unref(media),
        name: user.name,
        surname: user.surname,
        title: unref(title),
    }

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({data})
    }
    try {
        const fetchResponse = await fetch(`${config.API_URL}/posts`, settings)
        const res = await fetchResponse.json()
        console.log(res)
    } catch (e) {
        return e
    }
}

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
}
</script>

<style lang="scss" scoped>
@import '~/components/Posts/styles/post-create.scss'
</style>
