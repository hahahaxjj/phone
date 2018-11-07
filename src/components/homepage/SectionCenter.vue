<template>
  <div class="recommend content_my">
    <div  v-for=" i in list">
      <dl class="indentify">
        <dt><span><img :src="i.img"></span></dt>
        <dd class="phone">{{i.phone}}</dd>
        <dd class="star">
          <img :src="i.starimgr">
          <img :src="i.starimgr">
          <img :src="i.starimgr">
          <img :src="i.starimgr">
          <img :src="i.starimgg">
        </dd>
      </dl>
      <div class="content_data percent100">
        <h3 class="title">{{i.title}}</h3>
        <div class="clearfix">
          <p class="number"><span>{{i.number}}</span>&nbsp;&nbsp;&nbsp;&nbsp;{{i.dw}}</p>
          <router-link :to="'voucher'"><a class="charge" href="#" >{{i.charge}}</a></router-link>
        </div>
        <div class="clearfix">
          <dl class="lf">
            <dt>{{i.dt1}}</dt>
            <dd><span>{{i.dt1n}}</span>&nbsp;&nbsp;&nbsp;&nbsp;{{i.dw}}</dd>
          </dl>
          <dl class="rg">
            <dt>{{i.dt2}}</dt>
            <dd><span>{{i.dt2n}}</span>&nbsp;&nbsp;&nbsp;&nbsp;{{i.dw}}</dd>
          </dl>
        </div>
      </div>
    </div >
    <div class="content_nav clearfix" >
      <ul class="listRouter" >
        <li class=""  ><a href="#"><strong></strong><span>余额</span></a></li>
        <li class="" ><a href="#"><strong></strong><span>流量</span></a></li>
        <li class="" ><a href="#"><strong></strong><span>语音</span></a></li>
        <li class=""  ><a href="#"><strong></strong><span>积分</span></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SectionCenter",
    data(){
      return{
        list:[],
        listDate:{}
      }
    },
    methods:{
      Option(){
        fetch('http://localhost:8000/personal')
          .then(response=> {
            response.json().then( (data) => {
              this.list = data.remaining;
              this.listDate = data
            });
          })
      },
    },

    created(){
      this.Option()
    },
    mounted(){
      var that = this
      $(".listRouter li").click(function () {
         var index = $(this).index()
         if(index == 0){
           that.list = that.listDate.remaining;
         }
        if(index == 1){
                that.list = that.listDate.quantity;
        }
        if(index == 2){
          that.list = that.listDate.voice;
        }
        if(index == 3){
          that.list = that.listDate.integral;
        }
        // console.log(that.list)
      })
    }
  }


</script>
<style scoped>
.recommend{
  height: 17rem;
  background: #ffffff;
  position: relative;
}
.content_my .indentify {
  padding-top: 0.768rem;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 10;
}
.content_my .indentify dt {
  height: 2.34rem;
  text-align: center;
}
.content_my .indentify dt span {
  display: inline-block;
  width: 2.34rem;
  height: 2.34rem;
  border-radius: 1.17rem;
  box-shadow: 0px 3px 3px #dceaf5;
  overflow: hidden;
}
.content_my .indentify dt span img {
  width: 2.34rem;
  height: 2.34rem;
}
.content_my .indentify dd.phone {
  padding-top: 0.384rem;
  text-align: center;
  font: 0.64rem/0.64rem "microsoft yahei";
  color: #1e1f81;
}
.content_my .indentify dd.star {
  padding-top: 0.21rem;
  text-align: center;
}
.content_my .indentify dd.star img {
  display: inline-block;
  width: 0.46rem;
  height: 0.46rem;
}
.content_my .percent100 {
  background: url(../../assets/img/percent100.png) no-repeat center bottom/100% auto;
}
.content_my .content_data {

  height: 15.78rem;
  padding: 4.37rem 1.06rem 0;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 6;
  box-sizing: border-box;
}
.content_my .content_data .title {
  font: 0.64rem/0.64rem "microsoft yahei";
  color: #384895;
}
.clearfix {
  padding-top: .0rem;
  float: left;
  width: 100%;
  box-sizing: border-box;
}
.content_my .content_data .number {
  display: inline-block;
  float: left;
  font-size: 0.512rem;
  color: #3d55ca;
}
.content_my .content_data .number span {
  font: 2.8rem "microsoft yahei";
  color: #3d55ca;
}
.content_my .content_data .charge {
  display: inline-block;
  float: right;
  margin-top: .7rem;
  padding-right: 0.55rem;
  font: 0.512rem/0.512rem "microsoft yahei";
  background: url(../../assets/img/forward.png) no-repeat right center/auto 100%;
  color: #2e4099;
}
.content_my .content_data dl.lf {
  float: left;
}

.content_my .content_data dl dt {
  float: left;
  width: 1.58rem;
  height: 1.58rem;
  margin-top: 0.384rem;
  text-align: center;
  font: 0.46rem/1.48rem "microsoft yahei";
  border-radius: 50%;
  border: 2px solid #3160a1;
  color: #2e4099;
}
.content_my .content_data dl dd {
  float: left;
  padding-left: 0.42rem;
  padding-top: 0.42rem;
  font-size: 0.512rem;
  color: #3d55ca;
}
.content_my .content_data dl dd span {
  font-size: 1rem;
   /*font-size: 1.372rem; */
  color: #1e1f81;
}
.content_my .content_data dl.rg {
  float: right;
  right: 0;
}
.content_my .content_data dl {
  display: inline-block;
  margin-top: -0.29rem;
}

.content_nav {
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 8;
}
.content_nav ul {
  padding: 0;
}
.content_nav ul li {
  width: 25%;
  float: left;
  text-align: center;
  padding-top: 0.64rem;
}
.content_nav ul li a {
  display: block;
  text-decoration: none;
}
.content_nav ul li a strong {
  display: block;
  width: 2.73rem;
  height: 2.73rem;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
}
.content_nav ul li a span {
  display: block;
  padding: 0.42rem 0;
  font: 0.512rem/0.512rem "microsoft yahei";
  color: #a5add3;
}
.content_nav ul li:nth-of-type(1) a strong {
  background: url(../../assets/img/myiconData1.png)
  no-repeat center center/100% 100%;
}
.content_nav ul li:nth-of-type(2) a strong {
  background: url(../../assets/img/myiconData2.png)
  no-repeat center center/100% 100%;
}
.content_nav ul li:nth-of-type(3) a strong {
  background: url(../../assets/img/myiconData3.png)
  no-repeat center center/100% 100%;
}
.content_nav ul li:nth-of-type(4) a strong {
  background: url(../../assets/img/myiconData4.png)
  no-repeat center center/100% 100%;
}


</style>
