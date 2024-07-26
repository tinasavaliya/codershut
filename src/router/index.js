import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../view/HomePage.vue';
import AboutPage from '../view/AboutPage.vue';
import CareerPage from '../view/CareerPage.vue';
import PortfolioPage from '../view/PortfolioPage.vue';
import ContactPage from '../view/ContactPage.vue';

// import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    name: 'home',
    path: '/',
    component: HomePage,
  },
  {
    name: 'about',
    path: '/about',
    component: AboutPage,
  },
  {
    name: 'portfolio',
    path: '/portfolio',
    component: PortfolioPage,
  },
  {
    name: 'career',
    path: '/career',
    component: CareerPage,
  },
  {
    name: 'contact',
    path: '/contact', 
    component: ContactPage,
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
