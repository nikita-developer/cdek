<template>
<div class="post">
    <div class="post__create">
        <button class="post__create-btn" @click="isOpenModal = true">Создать новый пост</button>
    </div>
    <div class="post__list">
        <Posts-PostItem v-for="post in posts" :key="post._id" :post="post"></Posts-PostItem>
    </div>
    <Modals-ModalDefault :show="isOpenModal" @close="close">
        <Posts-PostCreate @closeCreate="close(), infoCreatePost()"></Posts-PostCreate>
    </Modals-ModalDefault>
    
    <transition name="fade">
        <AlertSuccess v-if="messageSucces">Пост добавлен!</AlertSuccess>
    </transition>
</div>
</template>

<script setup>
    const isOpenModal = ref(false)
    const close = () => isOpenModal.value = false

    let config = useRuntimeConfig()

    let messageSucces = ref(false)
    const infoCreatePost = () => {
        messageSucces.value = true
        setTimeout(() => messageSucces.value = false, 1500)
    }

    const posts = ref()

    const getPostsAll = async () => {
        const settings = {
            method: 'GET',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }
        try {
            let fetchResponse = await fetch(`${config.API_URL}/posts/getAll`, settings)
            const data = await fetchResponse.json()
            
            posts.value = data
        } catch (e) {
            return e
        }
    }

    onMounted(() => {
        getPostsAll()
    })
</script>

<style lang="scss" scoped>
@import '~/components/Posts/styles/post.scss'
</style>
