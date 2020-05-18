import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import index from '@/views/MyIndex';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
