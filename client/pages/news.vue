<template>
  <div class="news">
    <h1>Новости</h1>
    <div class="news__body">
        <div class="news-list">
          <div class="news-list__item">
            <div class="news-list__head">
              <div class="news-list__face"><img src="/media/profile/profile-1685740322126-934141198-21485.jpg" alt=""></div>
              <div class="news-list__author"><span>Никита</span><span>вчера в 10:55</span></div>
            </div>
            <div class="news-list__description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia tempore molestiae omnis. Illum odio, laboriosam labore sunt voluptates velit iste, ab ipsa nobis repudiandae cumque nisi dicta delectus, nostrum beatae harum nemo quidem doloremque voluptate quaerat quam ad dolorem nulla eos! Corrupti doloribus autem quasi commodi sunt deleniti minima numquam sequi fugiat aliquam recusandae tenetur quis, possimus ipsum quae, laboriosam quia sed tempora quam animi atque nam et similique. Saepe dolorem dignissimos, deleniti nam tempore at voluptate in, commodi numquam quibusdam officia sint distinctio beatae minus reprehenderit veritatis! Id, fugit! Beatae enim ad pariatur non quasi itaque ipsum iusto.</p>
            </div>
            <div class="news-list__media">
              <img src="/media/profile/profile-1685740322126-934141198-21485.jpg" alt="">
            </div>
            <div class="news-list__footer">
              <div class="news-list__like"><span class="material-symbols-outlined">favorite</span><span>3 645</span></div>
              <div class="news-list__comments"><span class="material-symbols-outlined">chat_bubble</span><span>21</span></div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
    .news {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
</style>