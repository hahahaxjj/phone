
    <template>
            <ul class="user">
            <li>
                   <input id="text" type="text" maxlength="11" placeholder="手机号码">
            </li>
            <li>
                <input  id="password" type="text" class="signin2" placeholder="请您使用客服密码，购买、办理更方便">
            </li>
            <li>
                <span class="on"></span><span>记住账号</span>
                 <a href="">互联网用户登录</a>
            </li>
        </ul>
</template>


<script>
export default {

}
</script>
<style lang="scss">
.user{
          background: #fff;
     width:90%;
     margin:0 auto;
     font-size:0.6em;
     padding:0 20px;
     li{
         width:100%;
         height:40px ;
         margin:20px 0;
         input{
            width:100%;
            height: 100%;
            background: url('../../../static/img/phone_icon.png')no-repeat;
            background-size:0.6rem;
            background-position: 0.4rem 0.4rem;
            text-indent: 1.2rem;
            border:1px solid #dfdfdf;
         }
     }
     :nth-child(2){
        box-sizing: border-box;
         .signin2{
             width:100%;
             box-sizing: border-box;
              background: url('../../../static/img/smsg_icon.png')no-repeat;
                background-size:0.6rem;
                background-position: 0.4rem 0.5rem;
         }
     }
     :nth-child(3){
         .on{
            display: block;
            width: 20px;
            height: 20px;
            border-radius: 10px;
            float: left;
            border: solid 1px #dfdfdf;
            margin-right: 10px;
         }
         a{
             float: right;
             color:#666;
         }
     }
 }
</style>
