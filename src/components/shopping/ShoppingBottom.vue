<template>
<div class="bottom">
    <div class="ShoppingBottom">
    <div>
        <a href="">登录</a> |&nbsp;<a href="">帮助</a>
    </div>
    <div>
        <a href="">意见反馈</a> | &nbsp;
        <a style="color:black">回到顶部</a>
    </div>
    </div>
    <div class="bb">
        <ul>
            <li><a href="">标准版</a></li>
            <li><a class="active" href="">触屏版</a></li>
            <li><a href="">电脑版</a></li>
            <li><a href="">客户端</a></li>
        </ul>
    </div>
    <p> Copyright©1999-2018  中国移动  版权所有</p>
</div>
</template>

<script>
export default {
name:"shopping-bottom"
    }
</script>

<style lang="scss">
.bottom{
    width:100%;
    background: #f4f4f4;
    padding-bottom:0.6rem;
}
.ShoppingBottom{
    padding:0.1rem 0.5rem;
    width:80%;
    margin:0 auto;
    font-size:0.14rem;
    border:1px solid #e2e2e2;
    a{
        color:#0085d0;
        font-size:0.14rem;
    }
    :nth-child(1){
        display: inline-block;
    }
    :nth-child(2){
        float: right;
    }
}
.bb{
    font-size:0.12rem;
    width:80%;
    margin:0 auto;
    padding:0.1rem 0.5rem;
    overflow: hidden;
    li{
        width:25%;
        float: left;
        a{
             color:black;
        }
        .active{
            color:#0085d0;
        }
    }
}
p{
    margin-bottom:0.2rem;
    text-align: center;
    font-size:0.12rem;
}

</style>
