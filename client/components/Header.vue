<template>
  <header class="header">
    <div class="user" v-if="isAuth().value">
      <div class="user__image">
        <img :src="`/media/profile/${user.image}`">
      </div>
      <span class="user__name">{{ user.name }}</span>
    </div>
    <Nav/>
  </header>
</template>

<script setup>
let user = ref(useUser().value)
user = computed(() => useUser().value)
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    background-color: var(--primary);
  }

  .user {
    display: flex;
    align-items: center;
    justify-content: center;

    &__image {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;

      & img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__name {
      color: #fff;
      font-weight: 400;
      font-size: 18px;
    }
  }
</style>
