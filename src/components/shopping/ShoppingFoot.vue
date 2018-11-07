<template>

<div class="foot">
    <ul>
        <li>
          <router-link to="/">
            <img src="../../../static/img/foot1.jpg">
            <span>首页</span>
          </router-link>
        </li>
        <li>
            <router-link to="/shopping">
                <img src="../../../static/img/foot2.jpg">
                <span>商城</span>
            </router-link>
        </li>
        <li>
            <router-link to="/discount">
                <img src="../../../static/img/foot3.jpg">
                <span>优惠</span>
            </router-link>
        </li>
        <li>
          <router-link to="/YdHomepage">
            <img src="../../../static/img/foot4.jpg">
            <span>我的</span>
          </router-link>
        </li>
    </ul>

</div>
</template>

<script>
export default {
    name:"shopping-section",
}


</script>



<style lang="scss">
.foot{
    width:100%;
    position: fixed;
    bottom:0;
    background: white;
    z-index: 100;
    margin: 0 -1rem ;
    ul{

      border-top: 1px solid #e2e2e2;
        li{
            width:25%;
            height: 2.02rem;

            float: left;
            text-align: center;
            img{
              display: block;
              width: 1.06rem;
              height: 1.06rem;
              margin: 0.14rem auto 0;
            }
            span{
              display: block;
              padding: 0.10rem 0 0.192rem;
              font: 0.512rem/0.512rem "microsoft yahei";
              color: #666666;
            }
        }
    }
}

</style>
