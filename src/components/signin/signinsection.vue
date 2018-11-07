<template>
    <div class="qwe">
        <div class="boxqq">
            <ul class="xxk"  id ="a1">
                <li class="signin-active" @click="todx()">短信随机码登录</li>
                <li  @click="topassword()">客服密码登录 </li>
            </ul>
        <component v-bind:is="list"></component>
        </div>
        <div class="dl">
            <button href="" id="login_btn" @click="a()">立即登录</button>
        </div>
    </div>
</template>

<script>
import SigninOne from './signin1.vue'
import SigninTwo from './signin2.vue'
export default {
    data(){
        return{
            list:"SigninOne",
            arr :["SigninOne","SigninTwo"]
        }
    },
 components: {
     SigninOne,
     SigninTwo
 },
    methods: {
        todx:function(){
            this.list =this.arr[0];
            var a = document.getElementById("a1");
            var c = Array.from(a.children)
            c[1].classList.remove('signin-active')
            c[0].classList.add('signin-active')

        },
        topassword:function(){
            this.list =this.arr[1];
            var a = document.getElementById("a1");
            var c = Array.from(a.children)
            c[1].classList.add('signin-active')
            c[0].classList.remove('signin-active')
        },
        a(){
            const text = document.getElementById('text');
            const password = document.getElementById('password');
            const login_btn  = document.getElementById('login_btn');


            login_btn.onclick = function(){
                const zhreg = /^1[3|4|5|7|8][0-9]\d{8}$/;
                const reg = /^[a-zA-Z0-9_-]+$/;
                const tv = text.value;
                const pv = password.value;
                if(!zhreg.test(tv)){
                    alert("账号不正确")
                }else if(!reg.test(pv)){
                    alert("密码不正确")
                }
                else{
                    alert("登录成功")
                    window.location.href='http://localhost:8080/YdHomepage';
                }
            };
                }
    },
    created () {
         window.alert = function(text) {
    var div = document.createElement("div");
    div.style.backgroundColor = "skyblue";
    div.style.color = "black";
    div.style.position = " fixed";
    div.style.zIndex = 9999999;
    div.style.height = " 50px";
    div.style.width = "80%";
    div.style.top = " 25%";
    div.style.left = "47.5%";
    div.style.lineHeight = "50px";
    div.style.borderRadius = " 4px";
    div.style.fontSize = " 0.16rem";
    div.style.textAlign = "center";
    div.style.padding = "0 10px";
    div.className = "animated  bounceInDown";
    div.id = "alert";
    div.innerHTML = text;
    document.getElementsByTagName("body")[0].appendChild(div);
    var selfObj = document.getElementById("alert");
    //动态调整位置
    var alertWidth = window.getComputedStyle(selfObj, null).width;
    div.style.marginLeft = -parseInt(alertWidth) / 2 + "px";
    setTimeout(function() {
            document.getElementsByTagName("body")[0].removeChild(div);
       }, 3000);
}
    }
}
</script>


<style lang="scss">
.boxqq{
    padding-top:10px;
    background:white;
}
.qwe{
    background:#f7f7f7;
}
 .xxk{
     width:90%;
     border:1px solid #0085d0;
     margin:10px auto;
     overflow: hidden;
     border-radius: 19px;
     background: #fff;
     li{
        width:50%;
        float: left;
        height: 42px;
        line-height: 42px;
        font-size:0.875em;
        text-align: center;
        border-radius: 19px;
        font-size:0.6em;
        color:#666;
     }
     .signin-active{
         background:#0085d0;
         color:#fff;
     }
 }


 .dl{
     padding:10px 20px;
     button{
         display: block;
         border-radius: 4px;
         width:100%;
         height: 45px;
         font-size:0.6rem;
         color:white;
         background: #0085d0;
         line-height: 45px;
         text-align: center;
         border:0;
     }
 }
</style>
