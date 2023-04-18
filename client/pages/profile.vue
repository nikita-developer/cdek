<template>
  <div class="profile">
    <p>Id: {{user.id}}</p>
    <p>Почта: {{user.email}}</p>
    <p>Активация аккаунта: {{user.isActivated}}</p>
    <p>Активационная ссылка: {{user.activationLink}} <button @click="submit" class="btn btn-primary">отправить повторно</button></p>
  </div>
</template>

<script setup>
  const user = useUser().value
  const config = useRuntimeConfig();

  const submit = async () => {
    const settings = {
      method: 'POST',
      credentials: "include",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
      })
    }
    try {
      const fetchResponse = await fetch(`${config.API_URL}/send-link-active`, settings)
      const data = await fetchResponse.json();
      console.log(data)
    } catch (e) {
      return e
    }
  }
</script>

<style scoped>

</style>
