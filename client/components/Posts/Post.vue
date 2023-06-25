<template>
<div class="post">
    <div class="post__create">
        <button class="post__create-btn" @click="isOpenModal = true">Создать новый пост</button>
    </div>
    <div class="post__list">
        <Posts-PostItem></Posts-PostItem>
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

    let messageSucces = ref(false)
    const infoCreatePost = () => {
        messageSucces.value = true
        setTimeout(() => messageSucces.value = false, 1500)
    }
</script>

<style lang="scss" scoped>
@import '~/components/Posts/styles/post.scss'
</style>
