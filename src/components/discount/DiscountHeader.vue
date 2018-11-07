<template>
    <div class="dis-header" onclick="window.history.go(-1)">
        <a href=""><img src="../../../static/img/back_btn.png" @click="goone()"></a>
        活动
    </div>
</template>

<script>
export default {
methods: {
    goone(){
         $router.back(-1)
    }
}
}
</script>

<style lang="scss">
.dis-header{
  height: 1.92rem;
  font: 0.768rem/1.92rem "microsoft yahei";
  padding: 0  1.42rem;
  background: #f2f2f2;
  position: relative;
  width: 100%;
  z-index: 100;
    img{
      width: 44px;
      height: 44px;
      position: absolute;
      left: 0;
      top:0;
    }
}
</style>
