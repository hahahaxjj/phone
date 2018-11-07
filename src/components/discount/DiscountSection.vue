<template>
    <div class="dis-section">
        <ul>
            <li :key="index" v-for="(i,index) in l">
                <img :src="i.disimg">
                <p><span>{{i.section}}</span></p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            l:[]
        }
    },
methods: {
    sj(){
        fetch('http://localhost:8000/dis-section').then(response=>{
            response.json().then((data)=>{
                this.l = data;
            })
        })
    }
},
created () {
    this.sj()
}
}
</script>

<style lang="scss">
.dis-section{
    width:95%;
    margin: 0 auto;
    padding-top:0.1rem;
    ul{
        li{

            img{
              display: block;
              width: 100%;
              height: auto;

            }
            p{
              width: 100%;
              padding: 0.42rem 0 0.64rem;
              font: 0.64rem/0.64rem "microsoft yahei";
              color: #344051;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              span{
                color: rgb(0, 0, 0);
                font-family: 微软雅黑;
                font-size: 14px;
                font-style: normal;
                font-variant: normal;
                font-weight: normal;
                letter-spacing: normal;
                line-height: 21px;
                text-align: start;
                text-indent: 0px;
                text-transform: none;
                white-space: normal;
                word-spacing: 0px;
                -webkit-text-stroke-width: 0px;
                background-color: rgb(255, 255, 255);
                display: inline !important;
                float: left;
              }
            }
        }
    }
}
</style>
