<template>
  <ul>
    <li v-for=" i in list">
      <a href="">
        <img :src="i.category" alt="">
        <span>{{i.nav}}</span>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "SectionNav",

    data(){
      return{
        list:[]
      }
    },
    methods:{
      Option(){
        fetch('http://localhost:8000/homepagenav')
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
  }
  ul li{
    width: 25%;
    float: left;
    text-align: center;
    padding-top: 0.64rem;
    margin-bottom: 1rem;

  }
  ul li a{
    color: #666666;
    display: block;
    font-size: 12px;
    text-decoration: none;
  }
  ul li a img {
    display: block;
    width: 1.70rem;
    height: 1.70rem;
    margin: 0 auto;
  }
  ul li a span {
    display: block;
    padding-top: 0.27rem;
    font: 0.46rem/0.46rem "microsoft yahei";
    color: #666666;
  }


</style>
