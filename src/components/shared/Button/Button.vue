<script lang="ts" setup>

const { design } = defineProps<{
    design?: 'primary' | 'deafult' | 'ghost'
    disabled?: boolean
}>()

const getButtonStyle = () => {
    const sharedStyles = 'rounded-xl py-2 transition'

    switch (design) {
        case 'primary':
            return `${sharedStyles} w-full bg-lime-500 text-white hover:bg-lime-600 active:bg-lime-700 disabled:bg-slate-400`
        case 'ghost':
            return sharedStyles
        default:
            return sharedStyles
    }
}
</script>

<template>
    <button :disabled="disabled" :class="getButtonStyle()">
        <slot></slot>
    </button>
</template>