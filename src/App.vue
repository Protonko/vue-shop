<script lang="ts" setup>
import { onMounted, ref, watch, reactive, provide } from 'vue';
import debounce from 'lodash.debounce'
import Header from './components/Header.vue'
import CardList from './components/Card/CardList.vue'
import type { Sneaker } from './model'
import { API_URL } from './constants'

const DELAY = 500

const sneakers = ref<Sneaker[]>([])
const cartItems = ref<Sneaker[]>([])
const filters = reactive({
  title: ''
})

const getSneakers = debounce(async () => {
	const search = Object.keys(filters)
  .filter(key => !!filters[key as keyof typeof filters])
  .map(key => `${key}=*${filters[key as keyof typeof filters]}*`).join('&')

  try {
    const rawData = await fetch(`${API_URL}/items?${search}`)
    const jsonData: Sneaker[] = await rawData.json()
    // Remove corrupted data
    const filteredData =jsonData.filter(({ title }) => !!title)
    sneakers.value = filteredData
  } catch (error) {
    console.log(error)
  }

}, DELAY)

onMounted(getSneakers)

watch(filters, getSneakers)

const onSearch = (searchString: string) => {
  filters.title = searchString
}

const addItemToCart = (item: Sneaker) => {
  cartItems.value.push(item)
}

const removeItemFromCart = (itemId: Sneaker['id']) => {
  const index = cartItems.value.findIndex(({ id }) => id === itemId)
  if (index !== -1) {
    cartItems.value.splice(index, 1)
  }
}

const resetCart = () => {
  cartItems.value.length = 0
}

provide('cart', {
  cartItems: cartItems.value,
  addItemToCart,
  removeItemFromCart,
  resetCart,
})
</script>

<template>
    <div class="w-4/5 mx-auto bg-white rounded-xl shadow-xl mt-10">
      <Header />

      <CardList
        :items="sneakers"
        :title="$t('allSneakers')"
        :onSearch="onSearch"
      />
    </div>
</template>