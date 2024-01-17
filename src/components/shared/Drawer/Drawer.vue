<script setup lang="ts">
import Button from '../Button/Button.vue'

defineProps<{
    isOpen: boolean
    onClose: () => void
 }>()
</script>


<template>
    <div v-if="isOpen">
        <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
        <div class="fixed top-0 right-0 bg-white w-96 h-full z-20 p-8">
            <Button class="absolute right-4 top-4 pt-0 pb-0 text-sm" @click="onClose">&times;</Button>
            <slot></slot>
        </div>
    </div>
</template>