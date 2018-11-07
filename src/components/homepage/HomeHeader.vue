<template>
  <div class="box">
    <div class="header">
      <a href="#" onclick="window.history.go(-1)">
        <img src="../../assets/img/back.jpg" class="back">
      </a>我的
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeHeader"
  }
</script>

<style scoped>
  .box{
    height: 1.92rem;
  }
  .header {
    height: 1.92rem;
    font: 0.768rem/1.92rem "microsoft yahei";
    padding: 0  1.42rem;
    background: #f2f2f2;
    position: relative;
    width: 100%;
    z-index: 100;
  }
  .header .back {
    width: 0.40rem;
    height: 0.72rem;
    position: absolute;
    left: 0.42rem;
    top: 0.59rem;
  }

</style>
