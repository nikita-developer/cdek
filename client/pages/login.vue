<template>
  <div class="login">
    <form @submit.prevent="submit" class="form">
      <h3 class="form__title">Войти на сайт</h3>
      <label class="form__label">
        <span class="form__placeholder">Введите почту</span>
        <input v-model="email" type="text" class="form__field">
        <p class="form__message text-danger" v-if="errorsMessages.login"><small>{{errorsMessages.login}}</small></p>
      </label>
      <label class="form__label">
        <span class="form__placeholder">Введите пароль</span>
        <input v-model="password" type="text" class="form__field">
        <p class="form__message text-danger" v-if="errorsMessages.password"><small>{{errorsMessages.password}}</small></p>
      </label>
      <button class="form__btn">Отправить</button>
      <NuxtLink class="form__link" to="/registration">Регистрация</NuxtLink>
    </form>
  </div>
</template>

<script setup>
  import {errorsForm} from "../utils/form";
  const config = useRuntimeConfig();

  const email = ref('')
  const password = ref('')
  let errorsMessages = ref({})

  const submit = async () => {
    const settings = {
      method: 'POST',
      credentials: "include",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: unref(email),
        password: unref(password),
      })
    }
    try {
      const fetchResponse = await fetch(`${config.API_URL}/login`, settings)
      const data = await fetchResponse.json();
      if(fetchResponse.status === 200) {
        isAuth().value = true
        localStorage.setItem('token', data.accessToken)
        useUser().value = data.user
        navigateTo('/')
        errorsMessages.value = {}
      } else {
        errorsMessages.value = {}
        errorsMessages.value = errorsForm(data.errors)
      }
    } catch (e) {
      return e
    }
  }
</script>

<style scoped lang="scss">
  .login {
    width: 100%;
    padding: 15px;
    display: flex;
  }

  .form {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 280px;

    &__title {
      margin-bottom: 15px;
    }

    &__field {
      display: block;
      width: 100%;
      height: 40px;
      background-color: hsl(0deg 0% 0% / 4%);
      padding: 5px 10px;
      border-radius: 5px;
    }

    &__placeholder {
      display: inline-block;
      color: var(--gray);
      margin-bottom: 5px;
    }

    &__btn {
      margin-top: 10px;
      border-radius: 5px;
      background-color: var(--primary);
      color: #ffffff;
      height: 40px;
    }

    &__link {
      margin-top: 10px;
    }
  }
</style>
