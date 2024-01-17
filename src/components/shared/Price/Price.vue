<script lang="ts" setup>
import { formatPrice } from '@/utils';

defineProps<{
    text: string
    price: number
}>()
</script>

<template>
    <div class="flex gap-2 items-end">
        <span>{{ text }}:</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>{{ formatPrice(price) }}</b>
    </div>
</template>