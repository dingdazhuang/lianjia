<template>
  <div>
      <div class="header">
        <div class="wrap clear">
          <a href="www.lianjia.com" class="logo"></a>
          <div class="nav">
              <ul>
                <li @click="jumpToMaifang"><a :class="{active:isMaifang}">我要卖房</a></li>
                <li @click="jumpToGujia"><a :class="{active:isGujia}">我要估价</a></li>
                <li @click="jumpToChuzu"><a :class="{active:isChuzu}">我要出租</a ></li>
              </ul>
          </div>
          <a href="#" class="app">
            <span class="icon-app"></span>
            <span>下载链家APP</span>
          </a>
        </div>
      </div>
     <!--内容-->
      <router-view></router-view>
  </div>
</template>

<script>
  export default{
      data(){
          return{
              msg:'业主',
              isMaifang:true,
              isGujia:false,
              isChuzu:false
          }
      },
    methods:{
      jumpToMaifang(){
          this.$router.push('/maifang');
          this.isMaifang=true;
          this.isGujia=false;
          this.isChuzu=false;
      },
      jumpToGujia(){
        this.$router.push('/gujia');
        this.isMaifang=false;
        this.isGujia=true;
        this.isChuzu=false;
      },
      jumpToChuzu(){
        this.isMaifang=false;
        this.isGujia=false;
        this.isChuzu=true;
      }
    }
  }

</script>


<style>
   .header{
     background: #f5f5f6;
   }
    .wrap{
      margin: 0 auto;
      width: 1150px;
      padding: 30px 0 25px;
      line-height:32px;
    }
  .logo{
    float: left;
    width: 120px;
    height:32px;
    background:url(../../static/img/sprite.png) 15px -324px;
  }
  .nav{
    margin-left: 34px;
    float: left;
  }
  .nav ul li{
    float: left;
    font-size:16px;
    line-height:32px;
    color:#394043;
    cursor:pointer;
  }
    .nav ul li a{
      color:#394043;
    }
    .nav ul li a.active{
      color:#00ae66;
    }
    .nav ul li:not(:first-child){
      padding-left:32px;
    }
   .app{
     float: right;
     line-height:32px;
     font-size:16px;
     color:#394043;
   }
    .app:hover{
      text-decoration: underline;
    }
  .app .icon-app{
    float: left;
    width: 14px;
    height: 18px;
    margin-right: 10px;
    margin-top: 8px;
    background:url(../../static/img/sprite.png) -579px -146px;
  }

</style>
