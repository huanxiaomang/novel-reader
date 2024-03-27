import { createApp } from 'vue'
import '@/assets/style/reset.scss'
import '@/assets/style/common.scss'
import App from './App.vue'
import router from './router'


const app = createApp(App);
app.use(router);
app.mount('#app');
