<template>
  <header class="header">
    <div class="logo">Конюшня</div>
    <Nav/>
  </header>
</template>

<script setup>
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    background-color: var(--primary);
  }

  .logo {
    color: #ffffff;
    font-weight: 700;
    text-transform: uppercase;
  }
</style>
