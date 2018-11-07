<template>
  <div class="recommend">
    <div v-for="i in list">
      <div class="fh">
        <div class="fhl"><a href="">{{i.dl}}</a></div>
        <div class="fhr">
          <a href="">{{i.bz}}</a>{{i.x}}
          <a href="">{{i.yj}}</a>
        </div>
      </div>
      <ul>
        <li><a href="">{{i.bzb}}</a></li>
        <li><a href="">{{i.cp}}</a></li>
        <li><a href="">{{i.dn}}</a></li>
        <li><a href="">{{i.kh}}</a></li>
      </ul>
      <div class="fhf">{{i.bq}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SectionFooter",

    data(){
      return{
        list:[]
      }
    },
    methods:{
      Option(){
        fetch('http://localhost:8000/footer')
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
    margin-top: .26666666666667rem;
    margin-bottom: .26666666666667rem;
    border-top: 1px solid #e7e7e7;
  }
  .fh{
    width: 100%;
    background: #f7f7f7;
    border-bottom: 1px solid #eeeeee;
    padding: 0.53rem 0 1.06rem;
    font: 0.59rem/0.59rem "microsoft yahei";
  }
  .fhl{
    padding-left: 0.42rem;
    float: left;
  }
   a{
    color: #0085d0;
    text-decoration: none;
  }
  .fhr{
    float: right;
    text-align: right;
    padding-right: 0.42rem;
  }
  ul {
    float: left;
    width: 100%;
    padding: 1.06rem;
    margin: 0;
    box-sizing: border-box;
  }
  ul li {
    float: left;
    width: 25%;
    text-align: center;
    font: 0.512rem/0.512rem "microsoft yahei";
  }
  ul li a {
    color: #0085d0;
    text-decoration: none;
  }
  .fhf{
    width: 100%;
    padding: 0.53rem 0 3.06rem;
    text-align: center;
    font: 0.512rem/0.512rem "microsoft yahei";
    color: #000;
    background: #f7f7f7;
  }



</style>
