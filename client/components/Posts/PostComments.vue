<template>
<div class="post-comments">
    <div class="post-comments-add">
        <div class="post-comments-add__face"><img src="/media/profile/profile-1686042429395-273351095-404.png" alt=""></div>
        <div class="post-comments-add__description">
            <textarea class="post-comments-add__text"></textarea>
            <div class="post-comments-add__footer">
                <button class="post-comments-add__btn btn btn-light">Отмена</button>
                <button class="post-comments-add__btn btn btn-primary">Оставить комментарий</button>
            </div>
        </div>
    </div>
    <div class="post-comments__count">
        <i>23 комментария</i>
    </div>
    <div class="post-comments__show">Показать комментарии</div>
    <div class="post-comments__list">
        <Posts-PostCommentsItem class="post-comments__item" v-for="index in 5" :key="index"></Posts-PostCommentsItem>
    </div>
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '~/components/Posts/styles/post-comments.scss'
</style>
