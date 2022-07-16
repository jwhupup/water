import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import '@/design/index.css';
import 'virtual:windi-utilities.css';
import '@/assets/iconfont/iconfont.js';
import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router';

const app = createApp(App);

setupRouter(app);

app.mount('#app');
