<template>
  <div class="registration">
    <form @submit.prevent="submit" class="form">
      <h3 class="form__title">Регистрация</h3>
      <label class="form__label">
        <span class="form__placeholder">Введите почту</span>
        <input v-model="email" type="text" class="form__field">
        <p class="form__message text-danger" v-if="messages.email"><small>{{messages.email}}</small></p>
      </label>
      <label class="form__label">
        <span class="form__placeholder">Введите пароль</span>
        <input v-model="password" type="text" class="form__field">
        <p class="form__message text-danger" v-if="messages.password"><small>{{messages.password}}</small></p>
      </label>
      <button class="form__btn">Отправить</button>
      <NuxtLink class="form__link" to="/login">Войти</NuxtLink>
    </form>
  </div>
</template>

<script setup>
 const email = ref('')
 const password = ref('')

 const messages = ref({
   email: '',
   password: '',
 })

const submit = async () => {
  const settings = {
    method: 'POST',
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
    const fetchResponse = await fetch('http://localhost:5000/api/registration', settings)
    const data = await fetchResponse.json();
    if(fetchResponse.status === 200) {
      navigateTo('/login')
    }
    console.log(data)
  } catch (e) {
    return e
  }
}
</script>

<style scoped lang="scss">
  .registration {
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
