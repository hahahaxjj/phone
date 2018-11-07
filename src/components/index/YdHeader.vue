<template>
  <div class="box">
      <div class="header">
          <a href="#" target="_self" class="ui-link" onclick="window.history.go(-1)"><img src="../../assets/img/logo.png" class="logo"></a>
          <a href="#" target="_self" class="chooseLocus ui-link">
            <div class="locus">
              <span class="shi">北京</span>
              <img src="../../assets/img/down.png">
            </div>
          </a>
          <a href="#" class="search ui-link">搜索</a>
      </div>
  </div>
</template>

<script>
    export default {
        name: "YdHeader"
    }
</script>

<style scoped>
  .box{
    height: 1.92rem;
  }
  .header {
    height: 1.92rem;
    padding: 0 0.42rem;
    background: #f2f2f2;
    position: fixed;
    width: 100%;
    z-index: 100;

  }
  .header .logo {
    float: left;
    display: block;
    width: 1.92rem;
    height: 1.28rem;
    z-index: 2;
    position: absolute;
    left: 0.42rem;
    top: 0.46rem;
  }
  img {
    border: none;
  }
  .header .locus {
    float: left;
    padding: 0.85rem 0.42rem 0 0.32rem;
    z-index: 2;
    position: absolute;
    left: 2.34rem;
  }
  .locus img {
    float: left;
    display: inline-block;
    margin-left: 0.19rem;
    width: 0.384rem;
    height: 0.46rem;
  }
  .header .locus .shi {
    float: left;
    display: inline-block;
    font: 0.512rem/0.512rem "microsoft yahei";
    color: #000000;
  }
  .header .search {
    float: left;
    width: 6.95rem;
    height: 1.17rem;
    padding-left: 1.28rem;
    font: 0.512rem/1.17rem "microsoft yahei";
    color: #515151;
    border: 0.064rem solid #ffffff;
    border-radius: 4px;
    background: rgba(219,219,219,0.4) url(../../assets/img/search.png) no-repeat left center/auto 100%;
    z-index: 2;
    position: absolute;
    top: 0.42rem;
    left: 6rem;
  }

</style>
