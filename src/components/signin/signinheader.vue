<template>
    <div class="dis-header">
        <a  onclick="window.history.go(-1)"><img src="../../../static/img/back_btn.png" ></a>
        登录
        <a href=""><img src="../../../static/img/home_btn.png"></a>
    </div>
</template>

<script>
export default {
// methods: {
//     goone(){
//          $router.back(-1)
//     }
// }
}
</script>

<style lang="scss">
.dis-header{
    width:100%;
    height:44px;
    background: #f7f7f7;
    position: relative;
    font-size:0.6rem;
    line-height:44px;
    
    :nth-child(1){
        width:44px;
        height: 44px;
            img{
        position: absolute;
        top:0;
        left:0;
    }
    }
    :nth-child(2){
        display: block;
        width:44px;
        height: 44px;
        position: absolute;
        top:0;
        right:0;
        img{
        width:44px;
        height: 44px;

        }
    }
}
</style>
