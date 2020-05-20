<template>
  <div id="app">
    <el-container  v-if="$route.meta.keepAlive">
      <el-headerBody>
        <!-- 导航栏 -->
        <header-nav></header-nav>
      </el-headerBody>
      <Test></Test>
      <!--中间主要内容-->
      <!--<el-container>-->
        <!--<el-aside width="250px">-->
          <!--&lt;!&ndash; 侧边栏 &ndash;&gt;-->
          <!--<left-nav></left-nav>-->
        <!--</el-aside>-->
        <!--<el-main>-->
          <!--&lt;!&ndash; Body &ndash;&gt;-->
          <!--<router-view></router-view>-->
        <!--</el-main>-->

      <!--</el-container>-->

      <!--脚部公共部分的-->
      <!--<el-footer>-->
        <!--&lt;!&ndash; 导航栏 &ndash;&gt;-->
        <!--<footer-nav></footer-nav>-->
      <!--</el-footer>-->

    </el-container>
  </div>
</template>

<script>
  // 公共头部
  import headerBody from './components/Header';
  // 公共左侧导航烂
  // import left from './components/LeftNav';
  // // 公共尾部
  // import footer from './components/Footer';
  import TestElementUI from './components/TestElementUI';

export default {
  name: 'App',
  components: {
    headerNav: headerBody,
    Test: TestElementUI,
    // leftNav: left,
    // footerNav: footer,
  },
};
</script>

<style scoped >
  /*@import "./assets/images/css/common.css";*/
  /*@import "./assets/images/css/banner.css";*/
  /*@import "./assets/css/style.css";*/
  /*@import "./assets/css/base.css";*/

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
