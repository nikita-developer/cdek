<template>
<div class="post">
    <div class="post__create">
        <button class="post__create-btn" @click="isOpenModal = true">Создать новый пост</button>
    </div>
    <div class="post__list">
        <Posts-PostItem></Posts-PostItem>
    </div>
    <Modals-ModalDefault :show="isOpenModal" @close="isOpenModal = false">
        <Posts-PostCreate></Posts-PostCreate>
    </Modals-ModalDefault>
</div>
</template>

<script setup>
    const isOpenModal = ref(true)
</script>

<style lang="scss" scoped>
@import '~/components/Posts/styles/post.scss'
</style>
