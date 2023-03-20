<template>
  <div class="profile">
    <p>Id: {{user.id}}</p>
    <p>Почта: {{user.email}}</p>
    <p>Активация аккаунта: {{user.isActivated}}</p>
  </div>
</template>

<script setup>
  const user = useUser().value
</script>

<style scoped>

</style>