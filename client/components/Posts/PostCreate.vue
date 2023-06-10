<template>
<div class="post-create">
    <div class="post-create__item">
        <p class="post-create__placeholder">Заголовок поста</p>
        <input class="post-create__field" type="text">
    </div>
    <div class="post-create__item">
        <p class="post-create__placeholder">Описание поста</p>
        <textarea class="post-create__field"></textarea>
    </div>
    <div class="post-create__media">
        <button class="btn btn-primary">Добавить файл</button>
        <button class="btn btn-primary">Создать</button>
        <input type="file" hidden>
    </div>
    <div class="post-create__img">
        <div class="post-create__img-delete"></div>
        <img src="/media/profile/profile-1686042429395-273351095-404.png" alt="">
    </div>
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '~/components/Posts/styles/post-create.scss'
</style>
