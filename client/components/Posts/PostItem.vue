<template>
<div class="post-item">
    <div class="post-item__head">
        <div class="post-item__face"><img src="/media/profile/profile-1686042429395-273351095-404.png" alt=""></div>
        <div class="post-item__author"><span>Никита</span> <span>вчера в 10:55</span></div>
    </div>
    <div class="post-item__title">Заголовок поста</div>
    <div class="post-item__description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia tempore molestiae omnis.
            Illum odio, laboriosam labore sunt voluptates velit iste, ab ipsa nobis repudiandae cumque nisi
            dicta delectus, nostrum beatae harum nemo quidem doloremque voluptate quaerat quam ad dolorem
            nulla eos! Corrupti doloribus autem quasi commodi sunt deleniti minima numquam sequi fugiat
            aliquam recusandae tenetur quis, possimus ipsum quae, laboriosam quia sed tempora quam animi
            atque nam et similique. Saepe dolorem dignissimos, deleniti nam tempore at voluptate in, commodi
            numquam quibusdam officia sint distinctio beatae minus reprehenderit veritatis! Id, fugit!
            Beatae enim ad pariatur non quasi itaque ipsum iusto.</p>
    </div>
    <div class="post-item__media">
        <img src="/media/profile/profile-1686042429395-273351095-404.png" alt="">
    </div>
    <Posts-PostComments class="post-item__comments"></Posts-PostComments>
    <div class="post-item__footer">
        <div class="post-item__like active"><span class="material-symbols-outlined">favorite</span><span>3 645</span></div>
        <div class="post-item__message"><span class="material-symbols-outlined">chat_bubble</span><span>21</span></div>
    </div>
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '~/components/Posts/styles/post-item.scss'
</style>
