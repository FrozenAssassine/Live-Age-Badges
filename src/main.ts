import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import AgeImage from './components/AgeImage.vue';
import App from './App.vue';
import GeneratorPage from './components/GeneratorPage.vue';


const routes = [
  {
    path: '/ages',
    component: AgeImage
  },
  {
    path: '/',
    component: GeneratorPage
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
