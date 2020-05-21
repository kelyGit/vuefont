<template>
  <div id="app">
    <headerNav id="headerNav" ></headerNav>
      <!--<Test></Test>-->
      <!--中间主要内容-->
      <router-view></router-view>
      <!--<el-container>-->
        <!--<el-aside width="250px">-->
          <!--&lt;!&ndash; 侧边栏 &ndash;&gt;-->
          <!--<left-nav></left-nav>-->
        <!--</el-aside>-->
        <!--<el-main>-->
          <!--&lt;!&ndash; Body &ndash;&gt;-->
        <!--</el-main>-->

      <!--</el-container>-->

      <!--脚部公共部分的-->
    <footerNav ></footerNav>
  </div>
</template>

<script>
  // 公共头部
  import headerBody from './components/HeaderNav';
  // 公共左侧导航烂
  // import left from './components/LeftNav';
  // // 公共尾部
  import footerBody from './components/footerNav';
  // import TestElementUI from './components/TestElementUI';

export default {
  name: 'App',
  components: {
    headerNav: headerBody,
    footerNav: footerBody,
  },
};
</script>

<style scoped >
  /*@import "./assets/css/common.css";*/

  /*@import "./assets/images/css/banner.css";*/
  /*@import "./assets/css/style.css";*/
  /*@import "./assets/css/base.css";*/
  body, div, p, img, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, textarea, blockquote { padding: 0px; margin: 0px; outline: 0px none; }
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
