<template>
  <div class="users">
    <ul class="list-group" v-if="allUsers">
      <li class="list-group-item" v-for="user in allUsers" :key="user._id">{{user.email}}</li>
    </ul>
    <button @click="submit" class="btn btn-primary">Показать список пользователей</button>
  </div>
</template>

<script setup>
  let allUsers = ref(null)

  const submit = async () => {
    const settings = {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
    try {
      let fetchResponse = await fetch('http://localhost:5000/api/users', settings)
      if(fetchResponse.status === 401) {
        await useRefresh()

        if(isAuth().value) {
          submit()
        }
      }
      if(fetchResponse.status === 200 && isAuth().value) {
        const data = await fetchResponse.json();
        allUsers.value = data.users
      }
    } catch (e) {
      return e
    }
  }
</script>

<style scoped>

</style>