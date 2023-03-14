<template>
  <div class="page">
    <Header class="page__header"/>
    <Main class="page__main">
      <slot></slot>
    </Main>
    <Footer class="page__footer"/>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    &__main {
      display: flex;
      flex-grow: 1;
    }
  }
</style>
