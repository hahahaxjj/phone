<template>
  <div class="box">
    <div class="header">
        <a class="icon-return" onclick="window.history.go(-1)"></a>充值交费
        <a class="icon-menu" ></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VoucherHeader"
  }
</script>

<style scoped>
  .box{
    height: 1.92rem;
  }
  .header {
    background-color: #efefef;
    height: 40px;
    color: #333;
    font-size: 15px;
    position: relative;
    text-align: center;
    line-height: 40px;
    border-bottom: 1px solid #dfdfdf;
    padding: 0 10px;

  }
  .header .icon-menu {
    position: absolute;
    top: 20%;
    right: 10px;
    width: 28px;
    height: 28px;
    display: block;
    background: url(../../assets/img/icon-menu.png) center center no-repeat;
    background-size: 30px;
  }
  .icon-return {
    width: 40px;
    height: 40px;
    display: block;
    float: left;
    position: absolute;
    left: 0;
    top: 0;
  }
  a {
    color: #333;
    text-decoration: none;
  }
  .icon-return:before, .icon-return:after {
    content: '.';
    display: block;
    font-size: 0;
    border-width: 10px 10px 10px 0;
    border-style: solid;
    border-color: transparent #333 transparent transparent;
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    margin-top: -10px;
    left: 50%;
    margin-left: -10px;
  }
  .icon-return:after {
    border-right-color: #efefef;
    margin-left: -7px;
  }

</style>
