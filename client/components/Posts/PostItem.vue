<template>
<div class="post-item">
    <div class="post-item__head">
        <div class="post-item__face"><img src="/media/profile/profile-1686042429395-273351095-404.png" alt=""></div>
        <div class="post-item__author"><span>{{ post.name }} {{ post.surname }}</span> <span>{{ post.date }}</span></div>
    </div>
    <div class="post-item__title">{{ post.title }}</div>
    <div class="post-item__description">
        <p>{{ post.description }}</p>
    </div>
    <div class="post-item__media">
        <img :src="`/media/posts/${post.media}`" alt="">
    </div>
    <Posts-PostComments class="post-item__comments"></Posts-PostComments>
    <div class="post-item__footer">
        <div class="post-item__like active"><span class="material-symbols-outlined">favorite</span><span>{{ post.like }}</span></div>
        <div class="post-item__message"><span class="material-symbols-outlined">chat_bubble</span><span>{{ post.dislike }}</span></div>
    </div>
</div>
</template>

<script setup>
    const props = defineProps(['post'])
    console.log(props.post);
</script>

<style lang="scss" scoped>
@import '~/components/Posts/styles/post-item.scss'
</style>
