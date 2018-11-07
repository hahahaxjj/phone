<template>
  <ul>
    <li v-for=" i in list">
      <a href="">
        <img :src="i.img" alt="">
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "SectionPoster",

    data(){
      return{
        list:[]
      }
    },
    methods:{
      Option(){
        fetch('http://localhost:8000/poster')
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
    width: 100%;
    border: 1px solid #eeeeee;
    text-align: center;
    background: #ffffff;
    box-sizing: border-box;
  }



</style>
