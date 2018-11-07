<template>
  <div class="recommend">
    <h2>
      <span>猜你喜欢</span>
    </h2>
    <ul>
      <li v-for="i in list">
        <img :src="i.img" alt="">
        <h3>{{i.btit}}</h3>
        <p>{{i.ltit}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "SectionLike",

    data(){
      return{
        list:[]
      }
    },
    methods:{
      Option(){
        fetch('http://localhost:8000/like')
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
    color:  #e40077;
    line-height: 1.92rem;
    background: url(../../assets/img/icon4.png) no-repeat left center/0.66rem 0.66rem;
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
    margin: 0.42rem 0;
    padding: 0;
    background: #fff;
    border-top: 1px solid #eeeeee;
    box-sizing: border-box;
  }
  .recommend ul li {
    float: left;
    width: 33.3%;
    border-right: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    box-sizing: border-box;
  }
  .recommend ul li:nth-of-type(3n) {
    border-right: 0px;
  }
  .recommend ul li img {
    display: block;
    width: 3.84rem;
    height: 3.84rem;
    margin: 0.53rem auto 0;
  }
  .recommend ul li h3 {
    padding: 0.29rem 0.42rem 0;
    font: 0.59rem/0.59rem "microsoft yahei";
    color: #333333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    box-sizing: border-box;
  }
  .recommend  ul li p {
    height: 1.124rem;
    padding: 0.192rem 0.42rem 0.42rem;
    font: 0.512rem/0.512rem "microsoft yahei";
    color: #b2b2b2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    box-sizing: border-box;
  }

</style>
