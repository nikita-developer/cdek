<template>
  <div class="dogovors">
    <ul class="list-group">
      <nuxt-link class="list-group-item list-group-item-action" to="/dogovors/employed">Анкета заключения договора для самозанятых</nuxt-link>
      <nuxt-link class="list-group-item list-group-item-action" to="/dogovors/ip">Анкета заключения договора для ИП</nuxt-link>
      <nuxt-link class="list-group-item list-group-item-action" to="/dogovors/yr">Анкета заключения договора для ООО</nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "index.vue"
}
</script>

<style scoped>

</style>
