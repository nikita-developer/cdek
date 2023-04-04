<template>
  <div class="alert alert-success" role="alert"><slot></slot></div>
</template>

<script setup>

</script>

<style scoped>
  .alert-success {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
  }
</style>