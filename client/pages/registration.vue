<template>
  <form @submit.prevent="submit">
    <input v-model="email" type="text">
    <input v-model="password" type="text">
    <button>отправить</button>
  </form>
</template>

<script setup>
const email = ref('')
const password = ref('')

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
    localStorage.setItem('token', data.token)
    return console.log(data)
  } catch (e) {
    return e
  }
}
</script>

<style scoped>
input {
  border: 1px solid black;
}
</style>
