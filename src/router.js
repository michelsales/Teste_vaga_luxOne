import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/Home';
import Resultado from './pages/resultado/Resultado';


Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/resultado/:nameuser',
      component: Resultado,
      props: true,
    },
  ]
});

export default router;