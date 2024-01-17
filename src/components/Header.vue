<script setup lang="ts">
import { ref, inject, computed, watch } from 'vue'
import { formatPrice } from '@/utils'
import Button from './shared/Button/Button.vue'
import Drawer from './shared/Drawer/Drawer.vue'
import Cart from './Cart/Cart.vue'
import type { CartProvider } from '../model'

const isOpen = ref(false)
const { cartItems } = inject<CartProvider>('cart') ?? {}

const totalPrice = computed(() => cartItems?.reduce((acc, { price }) => acc + price, 0) ?? 0)

const toggleOpen = () => {
    isOpen.value = !isOpen.value
}

watch(totalPrice, () => {
  if (!totalPrice.value) {
    isOpen.value = false
  }
})
</script>

<template>
    <header class="flex justify-between items-center border-b border-slate-300 px-10 py-8">
        <div class="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" class="w-10">
          <div>
            <h2 class="text-xl font-bold uppercase">{{ $t('shopTitle') }}</h2>
            <p class="text-slate-500">{{ $t('shopDescription') }}</p>
          </div>
        </div>

        <nav>
          <ul class="flex items-center gap-10">
          <li>
            <Button
              class="flex items-center cursor-pointer gap-3 text-gray-500 enabled:hover:text-black disabled:cursor-not-allowed"
              design="ghost"
              @click="toggleOpen"
              :disabled="!totalPrice"
            >
              <img src="/cart.svg" alt="Cart">
              <b>{{ formatPrice(totalPrice) }}</b>
            </Button>
          </li>
        </ul>
        </nav>
      </header>

      <drawer :isOpen="isOpen" :onClose="toggleOpen">
        <Cart />
      </drawer>
</template>