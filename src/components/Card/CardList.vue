<script lang="ts" setup generic="TItem extends ItemDefault">
import { ItemDefault } from './types'
import Card from './Card.vue'
import Search from '../shared/Search/Search.vue'

defineProps<{
    items: TItem[]
    title: string
    onSearch: (searchString: string) => void
}>()
</script>


<template>
    <div class="p-8">
        <div class="flex justify-between items-center">
            <h2 class="text-3xl font-bold mb-8">{{ title }}</h2>
            
            <div class="flex items-center gap-8">
                <search :onSearch="onSearch" />
            </div>
        </div>

        <ul class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <li
                 v-for="item in items"
                :key="item.id"
            >
                <card
                    :item="item"
                />
            </li>
        </ul>
    </div>
</template>