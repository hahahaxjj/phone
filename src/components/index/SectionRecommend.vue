<template>
  <div class="recommend">
    <h2>
      <span>终端推荐</span>
    </h2>
    <ul>
      <li v-for="i in list">
        <a href="#" target="_blank" class="ui-link">
          <dl>
            <dt>
              <img :src="i.img">
            </dt>
            <dd class="dd1 clearfix">
              <span class="center"  data-skuid="1040660">{{i.price}}</span>
              <del></del>
            </dd>
            <dd class="dd2 clearfix">{{i.brand}}</dd>
          </dl>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "SectionRecommend",

    data(){
      return{
        list:[]
      }
    },
    methods:{
      Option(){
        fetch('http://localhost:8000/recommend')
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
    color: #ff4a7f;
    line-height: 1.92rem;
    background: url(../../assets/img/icon1.png) no-repeat left center/0.66rem 0.66rem;
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
    padding: 0.53rem;
    box-sizing: border-box;
    border-right: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
  }
  ul li dl {
    width: 100%;
  }
  ul li dl dt {
    width: 5.97rem;
    height: 4.90rem;
    margin: 0 auto;
    position: relative;
  }
  ul li dl dt img {
    width: 5.97rem;
    height: 4.90rem;
    position: absolute;
    top: 0px;
    left: 0px;
  }
  ul li dl dd.dd1 {
    width: 5.97rem;
    padding-top: 0.448rem;
    margin: 0 auto;
    box-sizing: border-box;
  }
  ul li dl dd.dd1 span.center {
    display: block;
    float: none;
    text-align: center;
  }
   ul li dl dd.dd1 span {
    display: inline-block;
    float: left;
    font: 0.64rem/0.64rem "microsoft yahei";
    color: #e40077;
  }
  ul li dl dd.dd2 {
    width: 100%;
    padding-top: 0.384rem;
    box-sizing: border-box;
    margin: 0 auto;
    font: 0.512rem/0.612rem "microsoft yahei";
    color: #333333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }



</style>
