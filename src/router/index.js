import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DetailMovie from '../views/DetailMovie.vue';
import NotFound from '@/views/NotFound.vue';
import ErrorServer from '@/views/ErrorServer.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/detail-movie/:id',
    name: 'detailMovie',
    component: DetailMovie
  },
  {
    path: '/page-notFound',
    name: 'not-Found',
    component: NotFound
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound
  },
  {
    path: '/error-server',
    name: 'error-server',
    component: ErrorServer
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
