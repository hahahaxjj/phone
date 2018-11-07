<template>
<!-- 业务、套餐 -->
<div class="yw">
    <div class="Shopping-yw" :key="index" v-for="(a,index) in yw">
    <div class="Shopping-yw-bt"><span></span><span>{{index}}</span></div>
    <ul>
        <li v-for=" p in a">
            <div class="l">
                <h3>{{p.yw}}</h3>
                <h6>{{p.content}}</h6>
            </div>
            <div class="r">
                 <img :src="p.ywt">
            </div>
        </li>
    </ul>
</div>

<div class="Shopping-xhm">
<div><span></span><span>选号码</span></div>
<ul>
    <li>
        <img src="../../../static/img/xhm1.png" alt="">
    </li>
    <li>
        <img src="../../../static/img/xhm2.png" alt="">
    </li>
</ul>
</div>
</div>

</template>

<script>
export default {
    data(){
        return {
            yw:[]
        }
    },
    methods: {
        //请求数据
        one(){
            fetch('http://localhost:8000/yw').then(response=> {
            response.json().then( (data) => {
            this.yw = data;
        });
    })
}
    },
    created () {
        this.one()
    }
}
</script>

<style lang="scss">
.Shopping-yw{
    margin-top:0.2rem;
    .Shopping-yw-bt{
        width:100%;
        font-size: .43rem;
        height: 1.2rem;
        padding-right: .4rem;
        padding-left: .4rem;
        line-height: 1.2rem;
        position: relative;
        background: url(../../assets/img/gg.png) no-repeat;
        background-size: 16rem 1.2rem;
        overflow: hidden;
        :nth-child(1){
            display: inline-block;
            position: absolute;
            left:0;
            height: 100%;
            background: #0085d0;
        }
    }
    ul{
        border:1px solid #e7e7e7;
        border-left:0;
        border-right:0;
        overflow: hidden;
        li{
          width: 50%;
          float: left;
          border-top: 1px solid #e7e7e7;
          border-left: 1px solid #e7e7e7;
          margin-left: -1px;
          margin-top: -1px;
        }
    }
}
.Shopping-yw-bt span{
  font-size: .43rem;
}


// 选号码
.Shopping-xhm{
    div{
        width:100%;
        font-size:0.16rem;
        padding-left:0.2rem;
        height: 1.2rem;
        line-height: 1.2rem;
        border-top:1px solid #e7e7e7;
        position: relative;
        background: url(../../assets/img/hh.png) no-repeat;
        background-size: 16rem 1.2rem;

        :nth-child(1){
            display: inline-block;
            position: absolute;
            left:0;
            height: 100%;
            background: #0085d0;
        }
    }
    ul{
        overflow: hidden;
    }
    li{
        width:50%;
        float: left;
        height: 100%;
        img{
            width:100%;
            height: 100%;
            border:1px solid #e7e7e7;
        }
    }
}
.Shopping-xhm div span{
  float: left;
  font-size: .43rem;
}
.Shopping-yw ul li .l{
  float: left;
  padding-left: .13333333333333rem;
  text-align: left;
  width: 80%;
}
.Shopping-yw ul li .l h3{
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: .38rem;
  color: #333;
  line-height: 1.5;
}
.Shopping-yw ul li .l h6{
  font-size: .28rem;
  color: #999;}
.Shopping-yw ul li .r{
    float: right;
    width: 5.1333333333333rem;
    height: 5.1333333333333rem;
  }
.Shopping-yw ul li .r  img{
  width: 100%;
  height: 100%;
  display: block;
}
</style>
