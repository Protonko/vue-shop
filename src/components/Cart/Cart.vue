<script setup lang="ts">
import { inject, computed } from 'vue'
import CartItem from './CartItem.vue'
import Price from '../shared/Price/Price.vue'
import Button from '../shared/Button/Button.vue'
import { createOrder } from '@/utils'
import type { CartProvider } from '@/model'

const { cartItems, removeItemFromCart, resetCart } = inject<CartProvider>('cart') ?? {}
const totalPrice = computed(() => cartItems?.reduce((acc, { price }) => acc + price, 0) ?? 0)

const onCreateOrder = async () => {
    try {
        if (cartItems && removeItemFromCart && resetCart) {
            await createOrder()
            resetCart()
        }
    } catch (error) {
        console.log(error)
    }
}
</script>

<template>
    <article class="flex h-full flex-1 justify-between flex-col">
        <header>
            <h2 class="text-2xl font-bold mb-4">{{ $t('cart') }}</h2>
        </header>

        <ul class="flex flex-1 flex-col gap-5 mb-4 overflow-y-auto">
            <li
                v-for="item in cartItems"
                :key="item.id"
            >
                <cart-item :item="item"></cart-item>
            </li>
        </ul>

        <footer class="flex flex-col gap-2">
            <price :text="$t('total')" :price="totalPrice"></price>
            <Button @click="onCreateOrder" class="mt-4" design="primary">{{ $t('checkout') }}</Button>
        </footer>
    </article>
</template>