<template>
  <ul>
    <li v-for=" i in list">
      <a href="">
        <h3>{{i.tit}}</h3>
        <img :src="i.img" alt="">
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "SectionBuy",

    data(){
      return{
        list:[]
      }
    },
    methods:{
      Option(){
        fetch('http://localhost:8000/buy')
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
  img{
    display: block;
    height: auto;
    max-width: 100%;
    margin: 0 auto;
  }
  ul{
    padding: 0 0 0.85rem;
    width: 100%;
    z-index: 10;
    box-sizing: border-box;
  }
  ul li {
    float: left;
    width: 33%;
    height: 6.05rem;
    border: 1px solid #eeeeee;
    text-align: center;
    background: #ffffff;
    box-sizing: border-box;
  }

   ul li a img {
    width: 2.77rem;
    height: 2.77rem;
  }
   ul li:nth-of-type(1) a h3 {
    color: #ef2869;
  }
   ul li:nth-of-type(2) a h3 {
    color: #ff9d04;
  }
  ul li:nth-of-type(3) a h3 {
    color: #896ef9;
  }
   ul li a h3 {
    padding: 1.06rem 0 0.64rem;
    font: 0.72rem/0.72rem "microsoft yahei";
  }


</style>
