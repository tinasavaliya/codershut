import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import './assets/fonts/font.css';
import './assets/css/stylesheet.css';

const app = createApp(App);

app.use(router);

app.mount('#app');
