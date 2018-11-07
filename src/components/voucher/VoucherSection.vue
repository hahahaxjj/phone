<template>
  <div class="">
    <div class="yhkcz">
      <img src="../../assets/img/yhkcz-img.jpg" alt="">
    </div>
    <div class="voucher">
      <div class="voucher-c">
        <div class="phone">  <span class="phone-span"></span>
          <input class="input-gray"   maxlength="11" type="text" placeholder="请输入11位移动手机号码" >
          <p><b>号码簿</b></p>
        </div>
      </div>
      <ul>
        <li class="price" :key="index"  v-for="(z,index) in list" @click="voucher(index)" >{{z.voucherq}}元</li>
      </ul>
      <div class="price-box clearfix">
        <p class="real-price">实际到账：<span class="">￥</span><b  class="fs-4">{{num}}</b></p>
        <div class=" pay-price">支付金额：
          <span class="font-rose">￥</span>
          <b class="fc-rose">{{num}}</b>
        </div>
      </div>
    </div>
    <div class="forever">
      <button class="btn-blue" >立即充值</button>
    </div>
    <dl class="reminder">
      <dt>温馨提示</dt>
      <span><a href="">充值订单</a></span>
    </dl>


  </div>
</template>

<script>
  export default {
    name: "VoucherSection",
    data(){
      return{
        list:[],
        num:0
      }
    },
    methods: {
      voucher(index){
        this.num = $(".price").eq(index).html()
      },
      voucherf(){
        fetch('http://localhost:8000/voucher')
          .then(response=> {
            response.json().then( (data) => {
              this.list = data;        
            });
          })
      },
    },
          created () {
        this.voucherf()
      }
  }
</script>

<style scoped>
.yhkcz{
  height: 53px;
  }
.yhkcz img{
  width: 100%;
  height: 53px;
}
.voucher-c{
  width: 100%;
  background-color: #fff;
  border: solid #DFDFDF 1px;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 25px;
  text-align: left;
  position: relative;
}
.phone{
  width: 96%;
  padding: 0% 2% 1% 2%;
}
.voucher .phone input{
  background-color: white;
  font-size: 1rem !important;
  opacity: 1;
  height: 1.6rem!important;
  width: 80%;
  line-height: 0.8534rem;
  padding-left: 0.2667rem;
  border: none;
}
  .phone-span{
    width: 1.06667rem;
    height: 1.1735rem;
    background-size: 0.69333rem;
    background: url(../../assets/img/lxr.png) center 3px no-repeat;
    background-size: 26px;
    position: absolute;
    right: 20px;
    display: block;
    cursor: pointer;
  }
.phone p{
  margin-top: 0.25rem;
  height: 0.4rem;
  line-height: 0.4rem;
  color: #A4A4A4;
  position: relative;
  width: 100%;
}
.phone p b{
  display: inline-block;
  font-size: 0.32rem;
  float: right;
  right: 10px;
  position: absolute;
}
ul li {
  width: 30.5%;
  float: left;
  border: solid #0085D0 1px;
  color: #0085D0;
  font-size: 16px;
  margin-bottom: 10px;
  margin-right: 0.17rem;
  border-radius: 4px;
  margin-left: 0.17rem;
  cursor: pointer;
  vertical-align: bottom;
  text-align: center;
  position: relative;
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
}
.price-box>p, .price-box>div {
  float: left;
  width: 50%;
  box-sizing: border-box;
  padding: 0 7px;
}
.price-box .pay-price {
  text-align: right;
}
.price-box>p, .price-box>div {
  float: left;
  width: 50%;
  box-sizing: border-box;
  padding: 0 7px;
}
.font-rose,.fc-rose {
  color: #ED2688;
}
.forever{
  padding: 0.2667rem;
}
.price-box{
  padding: 10px 0;
  font-size: 14px;
}
.btn-blue{
  background-color: #0084cc;
  font: 18px/42px "Microsoft YaHei","Tahoma","Arial";
  text-align: center;
  display: inline-block;
  width: 100%;
  border-radius: 3px;
  color: #fff;
  white-space: nowrap;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: 50px ;
}
.reminder   dt{
  background: url(../../assets/img/heart-3.png) no-repeat left 4px;
  text-indent: 16px;
  color: #cccccc;
  font-size: 14px;
  cursor: pointer;
  float: left;
  position: relative;
  left: 10px;
}
.reminder  span{
  float: right;
  color: #0085D0 !important;
  margin: 0 11px 0 0;
  font-size: 14px;
}
</style>
