<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-list__item">
        <NuxtLink active-class="active" class="nav-list__link" to="/">Главная</NuxtLink>
      </li>
      <li class="nav-list__item">
        <NuxtLink active-class="active" class="nav-list__link" to="/login">Авторизация</NuxtLink>
      </li>
      <li class="nav-list__item">
        <NuxtLink active-class="active" class="nav-list__link" to="/registration">Регистрация</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>

</style>
