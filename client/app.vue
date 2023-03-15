<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
  onMounted(() => {
    useAuth('asd')
  })
</script>
