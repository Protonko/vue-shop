<script lang="ts" setup>
import { inject, computed } from 'vue'
import { formatPrice } from '../../utils'
import Button from '../shared/Button/Button.vue'
import type { ItemDefault } from './types'
import type { CartProvider } from '../../model'

const { item } = defineProps<{ item: ItemDefault }>()

const { cartItems, removeItemFromCart, addItemToCart } = inject<CartProvider>('cart') ?? {}
const isAdded = computed(() => !!cartItems?.find(({ id }) => id === item.id))

const toggleAddItem = () => {
    if (isAdded.value) {
        removeItemFromCart?.(item.id)
    } else {
        addItemToCart?.(item)
    }
}
</script>

<template>
    <article class="bg-white relative border border-slate-200 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-xl transition h-full">        
        <figure>
            <img :src="item.imageUrl" alt="Sneakers">
        </figure>

        <h3 class="mt-2">{{ item.title }}</h3>

        <div class="flex justify-between items-center	mt-4">
            <div class="flex flex-col">
                <span class="text-slate-400">{{ $t('price') }}</span>
                <b>{{ formatPrice(item.price) }}</b>
            </div>
            <Button @click="toggleAddItem" type="ghost">
                <img :src="isAdded ? '/checked.svg' : '/plus.svg'" alt="Add logo">
            </Button>
        </div>
    </article>
</template>