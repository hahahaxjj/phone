<template>
  <div>
    <div class="swiper-container" id="swiper_container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="i in list"><a href=""><img :src="i.category" alt=""></a></div>
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div><!--这里是中间部分top部分的组件-->
</template>

<script>
  import Swiper from '../../../node_modules/swiper';
  export default {
    name: "SectionSwiper",
    mounted(){

    },
    updated(){
      new Swiper(".swiper-container",{
        grabCursor: true,//鼠标光标
        loop: true,//图片无限转动
        setWrapperSize :true,//自动轮播
        autoplay: 500, //轮播的时间
        spend:1000,
      })

    },
    data(){
      return{
        list:[]
      }
    },
    methods:{
      Option(){
        fetch('http://localhost:8000/swiper')
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
  .swiper-container {
    width: 100%;
  }


  .section-1 ul{
    display: flex;
    -webkit-box-lines: multiple;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    overflow: hidden;
    box-sizing: border-box;
  }

</style>
