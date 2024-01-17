import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n, useI18n } from 'vue-i18n'
import { defaultLocale, languages } from './i18n'

const i18n = createI18n({
    legacy: false,
    fallbackLocale: 'en',
    locale: defaultLocale,
    messages: Object.assign(languages),
})

const app = createApp(App, {
    setup() {
        const { t } = useI18n()
        return { t }
    }
})

app.use(i18n)

app.mount('#app')
