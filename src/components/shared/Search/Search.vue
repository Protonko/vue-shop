<script setup lang="ts">
const { onSearch } = defineProps<{
    placeholder?: string
    onSearch: (searchString: string) => void
}>()

const handleInput = (payload: Event) => {
    onSearch((payload.target as HTMLInputElement).value)
}
</script>

<template>
    <div class="relative">
        <span class="absolute left-3 top-1/2 translate-y-[-50%]">
            <img src="/search.svg" alt="Search">
        </span>
        <input
            class="border rounded-md py-2 px-4 pl-12 pr-4 outline-none focus:border-gray-400 transition"
            type="text"
            :placeholder="placeholder ?? $t('search')"
            @input="handleInput"
        >
    </div>
</template>