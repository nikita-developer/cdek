<template>
    <div class="modal-default" v-if="show">
        <div class="modal-default__outside" @click="emit('close', false)"></div>
        <div class="modal-default__body">
            <div class="modal-default__close" @click="emit('close', false)"></div>
            <div class="modal-default__header">
                <slot name="header"></slot>
            </div>
            <div class="modal-default__content">
                <slot></slot>
            </div>
            <div class="modal-default__footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['show'])
    const emit = defineEmits(['close'])
</script>

<style lang="scss" scoped>
@import '~/components/Modals/styles/modal-default.scss'
</style>