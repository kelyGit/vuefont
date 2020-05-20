import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import index from '@/views/MyIndex';

// Vue.use(Router);
if (process.env.NODE_ENV === 'development') {
  Vue.use(VueRouter);
}
Vue.use(VueRouter);

// 调用  import-development.js  require 文件
// const _import = require('./import-' + process.env.NODE_ENV)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: '首页',
      component: index,
      meta: {
        keepAlive: true,
      },
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
