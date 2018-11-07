<template>
  <!--这里是首页单页面组件-->
  <div  class="index">
    <home-header></home-header>
    <home-section></home-section>
    <shopping-foot></shopping-foot>
  </div>
</template>

<script type="text/ecmascript-6">
  import common from '../../static/common/common.js';
  // 引入组件
  import HomeHeader  from  "../components/homepage/HomeHeader"
  import HomeSection from  "../components/homepage/HomeSection"
  import ShoppingFoot from "../components/shopping/ShoppingFoot"
  export default {
    components: {
      HomeHeader,
      HomeSection,
      ShoppingFoot
    },

    data() {
      return {}
    }
  }
</script>

<style scoped>

  html{
    height: 100%;
  }
  .index{
    display: flex;
    height:100%;
    flex-direction: column;
    justify-content: space-between;
    overflow:hidden;
  }
</style>
