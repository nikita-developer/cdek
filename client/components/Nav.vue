<template>
  <nav class="nav">
    <div class="nav-burger">
      <span></span><span></span><span></span>
    </div>
    <ul class="nav-list nav__list">
      <li class="nav-list__item">
        <NuxtLink active-class="active" class="nav-list__link" to="/">Главная</NuxtLink>
      </li>
      <li class="nav-list__item">
        <NuxtLink active-class="active" class="nav-list__link" to="/login">Авторизация</NuxtLink>
      </li>
      <li class="nav-list__item">
        <NuxtLink active-class="active" class="nav-list__link" to="/registration">Регистрация</NuxtLink>
      </li>
      <li class="nav-list__item">
        <button class="nav-list__link">Выйти</button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
</script>

<style scoped lang="scss">
  .nav {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background-color: var(--primary);

    &__list {
     margin-left: auto;
    }
  }

  .nav-list {
    display: flex;
    margin-bottom: 0;

    &__item {
      & + & {
        margin-left: 10px;
      }
    }

    &__link {
      display: inline-block;
      color: #ffffff;
      padding: 5px 10px;
      border-radius: 5px;
      text-decoration: none;
      transition: .3s;

      &:hover {
        background-color: #fff;
        color: var(--primary);
      }
    }
  }
</style>
