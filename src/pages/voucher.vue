<template>
  <!--这里是首页单页面组件-->
  <div  class="index">
    <voucher-header></voucher-header>
    <voucher-section></voucher-section>
    <section-footer></section-footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import common from '../../static/common/common.js';
  // 引入组件
  import VoucherHeader  from  "../components/voucher/VoucherHeader"
  import VoucherSection from  "../components/voucher/VoucherSection"
  import SectionFooter    from  "../components/homepage/SectionFooter";
  export default {
    components: {
      VoucherHeader,
      VoucherSection,
      SectionFooter,

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
