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
        <button class="btn btn-primary">Добавить файл</button>
        <button class="btn btn-primary" @click="submit">Создать</button>
        <input type="file" hidden>
    </div>
    <div class="post-create__img">
        <div class="post-create__img-delete"></div>
        <img src="/media/profile/profile-1686042429395-273351095-404.png" alt="">
    </div>
</div>
</template>

<script setup>
const user = useUser().value
const config = useRuntimeConfig();
const description = ref('')
const media = ref('/media/profile/profile-1686042429395-273351095-404.png')
const title = ref('')

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
</script>

<style lang="scss" scoped>
@import '~/components/Posts/styles/post-create.scss'
</style>
