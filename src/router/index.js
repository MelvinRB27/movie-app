import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DetailMovie from '../views/DetailMovie.vue';
import NotFound from '@/views/NotFound.vue';
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
    path: '*',
    name: 'notFound',
    component: NotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
