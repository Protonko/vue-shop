<script lang="ts" setup>
import { inject } from 'vue'
import { formatPrice } from '@/utils'
import type { Sneaker } from '@/model'
import type { CartProvider } from '../../model'

const { item } = defineProps<{ item: Sneaker }>()
const { removeItemFromCart } = inject<CartProvider>('cart') ?? {}

</script>

<template>
    <article class="flex items-center bg-white relative border border-slate-200 rounded-xl p-2 justify-between">
        <div class="flex mr-2 items-center">
            <figure class="w-16 h-16 mr-4">
                <img class="w-full h-full min-w-[55px]" :src="item.imageUrl" alt="Sneakers">
            </figure>

            <div class="flex flex-col justify-between mr-2">
                <h3>{{ item.title }}</h3>
                <b>{{ formatPrice(item.price) }}</b>
            </div>
        </div>

        <button @click="() => removeItemFromCart?.(item.id)" class="opacity-60 hover:opacity-100 transition">
            <img src="/close.svg" alt="Close icon">
        </button>
    </article>
</template>