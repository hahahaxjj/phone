<template>
  <div class="recommend">
    <h2>
      <span>业务推荐</span>
    </h2>
    <ul>
      <li v-for="i in list">
        <div class="l">
          <h3>{{i.btit}}</h3>
          <p>{{i.ltit}}</p>
        </div>
        <div class="r">
          <img  :src="i.img" alt="">
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: "SectionFeature",

    data(){
      return{
        list:[]
      }
    },
    methods:{
      Option(){
        fetch('http://localhost:8000/feature')
          .then(response=> {
            response.json().then( (data) => {
              this.list = data;
            });
          })
      },
    },
    created(){
      this.Option()
    }
  }


</script>
<style scoped>
  .recommend{
    width: 100%;
    padding: 0;
    overflow: hidden;
  }
  .recommend h2 {
    width: 100%;
    height: 1.92rem;
    margin: 0;
    background: #f2f2f2;
    position: relative;
  }
  .recommend h2 span {
    color:  #117dea;
    line-height: 1.92rem;
    background: url(../../assets/img/icon3.png) no-repeat left center/0.66rem 0.66rem;
  }
  .recommend h2 span {
    display: block;
    padding-left: 0.8rem;
    margin-left: -1.856rem;
    font: 0.72rem/0.72rem "microsoft yahei";
    position: absolute;
    left: 50%;
    top: 30%;
    z-index: 2;
    box-sizing: border-box;
    text-align: center;
  }
  .recommend ul {
    width: 100%;
    margin: 0;
    padding: 0;
    background: #fff;
  }
  .recommend ul li {
    float: left;
    width: 50%;
    border-right: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    box-sizing: border-box;
  }
  .recommend ul li  h3 {
    width: 100%;
    padding-top: 0.96rem;
    font: 0.64rem/0.64rem "microsoft yahei";
    color: #333333;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
    text-overflow: ellipsis;
  }
  .recommend ul li p {
    width: 100%;
    padding: 0.36rem 0 1.13rem;
    font: 0.512rem/0.512rem "microsoft yahei";
    color: #999999;
    white-space: nowrap;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .recommend ul li img{
    width: 1.92rem;
    height: 1.92rem;
  }
  .recommend .l{
    float: left;
    width: 5.33rem;
    padding-left: 0.42rem;
    box-sizing: border-box;
  }
  .recommend .r{
    float: right;
    width: 1.92rem;
    height: 1.92rem;
    margin: 1rem 0.53rem 0 0;
    border-radius: 50%;
  }
</style>
