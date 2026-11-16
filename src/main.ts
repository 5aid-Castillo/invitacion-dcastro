import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './index.css'
import vReveal from './directives/reveal.ts'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('reveal', vReveal);
app.mount('#app')