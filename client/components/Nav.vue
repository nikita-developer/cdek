<template>
  <nav v-click-outside="closeMenu" class="nav nav--mobile" :class="{open: isOpen}">
    <div class="nav-burger" @click="isOpen = !isOpen">
      <span></span><span></span><span></span>
    </div>
    <ul class="nav-list nav__list">
      <li class="nav-list__item">
        <NuxtLink active-class="active" class="nav-list__link" to="/">Главная</NuxtLink>
      </li>
      <li class="nav-list__item">
        <NuxtLink active-class="active" class="nav-list__link" to="/posts">Посты</NuxtLink>
      </li>
      <li class="nav-list__item" v-if="auth">
        <NuxtLink active-class="active" class="nav-list__link" to="/profile">Профиль</NuxtLink>
      </li>
      <li class="nav-list__item">
        <NuxtLink active-class="active" class="nav-list__link" to="/dogovors">Заключить договор</NuxtLink>
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
let isOpen = ref(false)

const closeMenu = () => isOpen.value = false
const config = useRuntimeConfig();

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
    const fetchResponse = await fetch(`${config.API_URL}/logout`, settings)
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
  z-index: 1;

  &__list {
    margin-left: auto;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    &.nav--mobile {
      &.open {
        .nav-list {
          transform: translateX(0);
        }

        .nav-burger {
          span:first-child {
            transform: translate(10px, -3px) rotate(45deg);
            width: 10px;
          }

          span:last-child {
            transform: translate(10px, 3px) rotate(-45deg);
            width: 10px;
          }
        }
      }

      .nav-list {
        position: fixed;
        top: 54px;
        right: 0;
        bottom: 54px;
        width: 240px;
        flex-direction: column;
        background-color: var(--primary);
        transform: translateX(100%);
        transition: transform .3s ease;

        &__item {
          & + .nav-list__item {
            margin-left: 0;
          }
        }

        &__link {
          background-color: transparent;
          display: block;
          width: 100%;
          border-top: 1px solid rgb(255 255 255 / 23%);
          border-radius: 0;
          text-align: right;

          &:hover {
            background-color: #0075f3;
            color: #ffffff;
          }
        }
      }

      .nav-burger {
        position: relative;
        width: 30px;
        height: 34px;
        display: flex;
        cursor: pointer;

        span {
          position: absolute;
          top: 50%;
          left: 5px;
          width: 20px;
          height: 3px;
          border-radius: 5px;
          background-color: #fff;
          transition: .3s;
        }

        span:first-child {
          transform: translateY(-7px);
        }

        span:last-child {
          transform: translateY(7px);
        }
      }
    }
  }
}

.nav-list {
  display: flex;

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

    &.active {
      background-color: #fff;
      color: var(--primary);
    }

    &:hover {
      background-color: #fff;
      color: var(--primary);
    }
  }
}

.nav-burger {
  display: none;
}
</style>
