<template>
<div class="box">
<!-- 轮播图 -->
<swipe class="my-swipe">
    <swipe-item class="slide1"  :key="index" v-for="(i,index) in lbt"><img :src="i.category"></swipe-item>
</swipe>
<!-- 导航 -->
<div  class="Shopping-nav">
    <ul>
        <li :key="index" v-for="(p,index) in nav">
            <a href="">
                <img :src="p.category">
              <span>{{p.nav}}</span>
            </a>
        </li>
    </ul>
</div>
<!-- 广告 -->
<a href=""><img src="../../../static/img/gg1.png" alt=""></a>
<!-- 分类 -->
<div class="Shopping-fl" :key="index" v-for="(val,f,index) in fl">
    <div class="Shopping-fl-bt" ><span></span><span>{{f}}</span></div>
    <ul>
        <li v-for="a in val">
            <div  class="ll">
                <h3>{{a.xh}}</h3>
                <h6>{{a.js}}</h6>
                <h5>￥{{a.rmb}}</h5>
            </div>
          <div class="rr">
            <img :src="a.flt">
          </div>

        </li>
    </ul>
</div>

</div>

</template>

<script>

export default {
    components: {
    },
    data(){
        return{
            lbt:[],
            nav:[],
            fl:[]

        }
    },

    //方法
    methods: {
        //获取轮播图数据
    one () {
    fetch('http://localhost:8000/lbt').then(response=> {
    response.json().then( (data) => {
        this.lbt = data;
    });
})
},
    //获取nav数据
    two(){
    fetch("http://localhost:8000/nav").then(response=>{
        response.json().then((data)=>{
        this.nav =data;
        })
    })
},
    three(){
    fetch("http://localhost:8000/fl").then(response=>{
        response.json().then((data)=>{
        this.fl =data;
        })
    })
},



    },
//生命钩子
created(){
  this.one()
  this.two()
  this.three()
}
}

</script>

<style lang="scss">
@import '../../../node_modules/vue-swipe/dist/vue-swipe.css';
.box{
    margin-bottom:0.1rem;
  font-size: 24px;
  img{
    width: 100%;
  }
}
.my-swipe {
  height: 6.5rem;
  color: #fff;
  font-size: 30px;
  text-align: center;
  img{
  display: block;
  height: auto;
  max-width: 100%;
  margin: 0 auto;
}

}
.ll{
  width: 3.4rem;
  height: 3.7333333333333rem;
  padding: .13333333333333rem 0;
  float: left;
  line-height: 1.7;
  padding-left: .13333333333333rem;
  text-align: left;
}
.rr{
  float: right;
  height: 3.7333333333333rem;
  width: 3.7333333333333rem;
}
.Shopping-nav{
    width:100%;
    height: 1.6rem;
  li{
    width: 25%;
    float: left;
    text-align: center;
    padding-top: 0.64rem;
    margin-bottom: 1rem;
    a{
      color: #666666;
      display: block;
      font-size: 12px;
      text-decoration: none;
    }
    img{
      display: block;
      font-size: 0;
      width: 1.0666666666667rem;
      height: 1.0666666666667rem;
      max-width: 100%;
      margin: 0 auto;
      left: 50%;
    }
  span{
    display: block;
    padding-top: 0.27rem;
    font: 0.46rem/0.46rem "microsoft yahei";
    color: #666666;
  }
  }
}
.Shopping-fl-bt  span{
  float: left;
  font-size: .43rem;
}
//分类
.Shopping-fl{
  position: relative;

    .Shopping-fl-bt{
      position: relative;
      height: 1.2rem;
      padding-right: .4rem;
      padding-left: .4rem;
      line-height: 1.2rem;
      background: url(../../assets/img/yy.png) no-repeat;
      background-size: 16rem 1.2rem;

        :nth-child(1){
            display: inline-block;
            position: absolute;
            left:0;
            float: left;
            font-size: .43rem;
            height: 100%;
            background: yellow;
        }
    }
    ul{
        border:1px solid #e7e7e7;
        border-left:0;
        border-right:0;
        overflow: hidden;
        li{
            border: 1px solid #e7e7e7;
            box-sizing: border-box;
            padding:0.1rem 0 0.1rem;
            float: left;
            width:50%;
            display: block;
            div{
                padding:0.05rem 0 0.05rem 0.05rem;
                float: left;

            }
            h3{
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: .38rem;
              color: #333;
              line-height: 1.5;
            }
            h5{
              width: 100%;

              color: #e40077;
              line-height: 1.5;
            }
            h6{
                font-size: .28rem;
                font-weight:normal;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
            }
            img{
              width:100%;
              height: 100%;


            }
        }
    }
}
</style>

