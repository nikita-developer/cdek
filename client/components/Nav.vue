<template>
  <nav class="nav">
    <div class="nav-burger">
      <span></span><span></span><span></span>
    </div>
    <ul class="nav-list nav__list">
      <li class="nav-list__item">
        <NuxtLink active-class="active" class="nav-list__link" to="/">Главная</NuxtLink>
      </li>
      <li class="nav-list__item" v-if="auth">
        <NuxtLink active-class="active" class="nav-list__link" to="/profile">Профиль</NuxtLink>
      </li>
      <li class="nav-list__item" v-if="auth">
        <NuxtLink active-class="active" class="nav-list__link" to="/users">Пользователи</NuxtLink>
      </li>
      <li class="nav-list__item" v-if="!auth">
        <NuxtLink active-class="active" class="nav-list__link" to="/login">Авторизация</NuxtLink>
      </li>
      <li class="nav-list__item" v-if="!auth">
        <NuxtLink active-class="active" class="nav-list__link" to="/registration">Регистрация</NuxtLink>
      </li>
      <li class="nav-list__item" v-if="auth">
        <button class="nav-list__link" @click="logout">Выйти</button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
  let auth = isAuth()

  const logout = async () => {
    const settings = {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }
    try {
      const fetchResponse = await fetch('http://localhost:5000/api/logout', settings)
      const data = await fetchResponse.json();
      localStorage.removeItem('token')
      isAuth().value = false
      navigateTo('/login')
    } catch (e) {
      return e
    }
  }
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
