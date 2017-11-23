<template>
<div>
  <div class="g-title">
    <h1>发布出售房源</h1>
    <p>8000+全国链家门店·10万+全国经纪人·链家倾情服务15年+</p>
  </div>
  <div class="m-form clear">
    <div class="box1">
      <dl>
        <dt>小区所在城市</dt>
        <dd>
          <div>
            <input type="text" value="杭州" readonly>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>小区名称</dt>
        <dd>
          <div>
            <input type="text" placeholder="请输入小区名">
          </div>
        </dd>
      </dl>
      <dl>
        <dt>房屋地址</dt>
        <dd>
          <input type="text" placeholder="楼栋号">
          <input type="text" placeholder="单元号">
          <input type="text" placeholder="门牌号">
        </dd>
      </dl>
      <dl>
        <dt>期望售价</dt>
        <dd>
          <div>
            <input type="text" placeholder="请输入您期望卖出的金额">
            <span>万元</span>
            <a href="#">不太清楚如何定价? 先估个价</a>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>称呼</dt>
        <dd>
          <div>
            <input type="text" placeholder="我们应该如何称呼您">
          </div>
        </dd>
      </dl>
      <dl>
        <dt>手机号码</dt>
        <dd>
          <div>
            <input type="text" placeholder="您的联系方式,方便联系">
          </div>
        </dd>
      </dl>
      <dl>
        <dt>手机验证码</dt>
        <dd>
          <div>
            <input type="text" placeholder="请输入手机验证码">
            <button>发送验证码</button>
          </div>
        </dd>
      </dl>
    </div>
    <div class="box2">
      <div class="hd">
        <div class="dealprice">
           <div class="tit">杭州市 成交均价</div>
           <div class="sub-tit">
             <span>30802 </span>
             <span>元/平方米</span>
             </div>
        </div>
        <div class="btn-ercode">
          <div class="icon-ercode"></div>
          <div class="layout-ercode">
            <div class="icon-ercode2"></div>
            <div class="txt">去链家APP提升卖房速度</div>
            <div class="sub-txt">APP·移动卖房新体验</div>
          </div>
        </div>
      </div>
      <div class="nowsellhouse">
        <ul class="bd">
          <li>
            <a href="#">沁雅花园 - 2室2厅/63.3平米</a>
            <span class="time">签约时间：2017-10-25</span>
            <span class="num">260万</span>
          </li>
          <li>
            <a href="#">沁雅花园 - 2室2厅/63.3平米</a>
            <span class="time">签约时间：2017-10-25</span>
            <span class="num">260万</span>
          </li>
          <li>
            <a href="#">沁雅花园 - 2室2厅/63.3平米</a>
            <span class="time">签约时间：2017-10-25</span>
            <span class="num">260万</span>
          </li>
        </ul>
      </div>
      <div class="moredeal">
        <a href="#">更多成交信息</a>
      </div>
    </div>
  </div>
  <div class="m-submit">
    <div class="btn-sumbit">
      <button>提交委托</button>
    </div>
    <div class="btn-weituo-text">卖房全流程</div>
  </div>
  <div class="m-process">
         <div class="hd">
           购房全流程
         </div>
         <ul class="bd">
           <li>
             <span class="icon-a"></span>
             <div class="tit1">发布房源</div>
             <div class="sub-tit1">在线上免费发布房源</div>
           </li>
           <li>
             <span class="icon-b"></span>
             <div class="tit1">发布房源</div>
             <div class="sub-tit1">在线上免费发布房源</div>
           </li>
           <li>
             <span class="icon-c"></span>
             <div class="tit1">发布房源</div>
             <div class="sub-tit1">在线上免费发布房源</div>
           </li>
           <li>
             <span class="icon-d"></span>
             <div class="tit1">发布房源</div>
             <div class="sub-tit1">在线上免费发布房源</div>
           </li>
         </ul>
  </div>
  <div class="m-gujia">
    <div class="wrap1">
       <div class="box-a">
         <div class="dingjia">不知道如何定价？</div>
         <div class="cankao">链家专业房屋估值，为您提供卖房买房价格参考</div>
       </div>
       <a class="box-b">
         <span class="mark"></span>
         <span class="icon-money"></span>
         <span class="txt">看看您的房子值多少钱？</span>
         <span class="icon-gujia">马上去估价</span>
       </a>
    </div>
  </div>
  <div class="getapp">
    <div class="wrap2">

    </div>
  </div>
</div>
</template>


<script>

</script>


<style>
  .g-title{
    padding:20px 0 50px 0;
    line-height:1;
    text-align:center;
    background: #f5f5f5;
  }
  .g-title h1{
    color:#333;
  }
  .g-title p{
    margin-top:10px;
    color:#878787;
    font-size:16px;
  }



  .m-form{
    width: 990px;
    margin:0 auto;
    margin-top:55px;
  }
  .m-form .box1{
    float: left;
  }
  .m-form .box1 input{
    width: 150px;
    background:transparent;
  }
  .m-form .box1 dl:first-child{
    padding-top:0;
  }
  .m-form .box1 dl{
    padding:12px 0;
    line-height:40px;
    border-bottom:1px solid #eee;
    overflow: hidden;
  }
  .m-form .box1 dl span{
    font-size: 14px;
    color:#394043;
  }
  .m-form .box1 dt{
    float: left;
    color:#333;
    font-weight:bold;
    width: 120px;
    font-size:14px;
  }
  .m-form .box1 dd{
    float: right;
    width: 470px;
  }
  .m-form .box1 a{
    color:#009de8;
    font-size: 12px;
    float: right;
  }
  .m-form .box1 button{
    float: right;
    line-height:40px;
    padding:0 30px;
    border:1px solid #ddd;
    background: #fdfdfd;
    cursor:pointer;
  }
  .m-form .box1 a:hover{
    text-decoration: underline;
  }


  .m-form .box2{
    float: right;
    /*padding-top:30px;*/
    /*border-top:4px solid #f6f6f6;*/
    width: 340px;
    border-bottom:4px solid #f6f6f6;
  }

  .box2 .hd{
    height: 90px;
    padding:22px 30px;
    background: #394043;
    color:#fff;
    box-sizing: border-box;
    position:relative;
  }
  .tit{
    height:14px;
    font-size:14px;
  }
  .sub-tit{
    margin-top:10px;
    height:22px;
    line-height:22px;
    font-size:22px;
  }
  .btn-ercode{
    position: absolute;
    z-index:1;
    right: 10px;
    top: 10px;
  }
   .icon-ercode{
     background: url(../../static/img/sprite2.png) -427px -163px;
     width: 18px;
     height: 18px;
     cursor:pointer;
   }

  .layout-ercode{
      position: absolute;
      width:196px;
      height: 238px;
      box-sizing: border-box;
      padding:28px 40px 28px 32px;
      background: url(../../static/img/sprite2.png);
      left:-200px;top:-40px;
  }
  .layout-ercode .icon-ercode2{
    width:124px;
    height:124px;
    background: url(../../static/img/sprite2.png) -196px -112px;
  }
  .layout-ercode .txt{
    margin-top:22px;
    color:#394043;
    text-align: center;
    font-size:14px;
    font-weight: bold;
    line-height:1;
  }
  .layout-ercode .sub-txt{
    text-align: center;
    color:#aaa;
  }
  /*.layout-ercode{*/
    /*width: 196px;*/
    /*height: 238px;*/
    /*background: url(../../static/img/sprite2.png);*/
    /*position: absolute;*/
    /*left:-200px;*/
    /*top:-40px;*/
    /*text-align: center;*/
    /*padding:28px 40px 28px 32px;*/
  /*}*/
  .nowsellhouse {
    box-sizing: border-box;
  }
 .nowsellhouse .bd{
   box-sizing: border-box;
   padding:8px 28px 0;
 }
  .nowsellhouse .bd li{
    padding:20px 0;
    position: relative;
    border-bottom:1px solid #ddd;

  }
  .nowsellhouse .bd li a{
    display: block;
    color:#333;
    font-size:14px;
    font-weight:bold;
    line-height:20px;
  }
  .nowsellhouse .bd li a:hover{
    text-decoration: underline;
  }
  .nowsellhouse .bd li .num{
    position: absolute;
    right:0;
    color:#e4393c;
    font-weight: bold;
    bottom:20px;
  }
  .nowsellhouse .bd li .time{
    color:#aaa;
    font-size:12px;
    margin-top:6px;
    line-height:1
  }
    .moredeal{
      text-align: center;
      width: 340px;
      height:100px;
      line-height:100px;
    }
  .moredeal a:hover{
    text-decoration: underline;
  }







  .m-submit{
    width: 990px;
    margin: 60px auto 0 auto;
    text-align:center;
  }
  .m-submit button{
    width: 190px;
    line-height:55px;
    background: #00ac65;
    color:#fff;
    font-size:18px;
    font-weight:500;
    border-radius:2px;
    cursor:pointer;
  }
  .btn-weituo-text{
    width: 190px;
    margin:0 auto;
    /*text-align: center;*/
    margin-top: 20px;
    color:#999;
    font-size: 13px;
  }

   .m-process{
     width: 990px;
     margin: 55px auto 50px auto;
   }
  .m-process:before{
    content:'';
    display:table;
  }
  .m-process .hd{
    position: relative;
    text-align: center;
  }
   .m-process .hd:before{
     content:'';
     position: absolute;
     top:10px;
     height:1px;
     width: 430px;
     background: #eee;
   }
  .m-process .hd:after{
    content:'';
    position: absolute;
    top:10px;
    height:1px;
    width: 430px;
    background: #eee;
  }



  .m-process .bd{
    padding-top: 45px;
    overflow: hidden;
  }
  .m-process .bd li{
    float: left;
    padding-left:58px;
    position:relative;
    margin-left:70px;
    width: 195px;
    box-sizing: border-box;
  }
  .m-process .bd li .tit1{
    font-weight:bold;
    font-size: 20px;
    line-height: 28px;
  }
  .m-process .bd li:first-child{
    margin-left:0;
  }

  .m-process .bd li span{
     position: absolute;
     left:0;
     top:0;
     width: 48px;
     height: 48px;
     background-color: #ddd;
     background-image:url(../../static/img/sprite2.png);
     border-radius:50%;
  }
   .icon-a{
    /*background-position:-342px -238px;*/
     background-position: -342px -238px;
  }
   .icon-b{
     background-position:-260px -293px
   }
  .icon-c{
    background-position:-308px -292px
  }
  .icon-d{
    background-position:-389px -238px
  }
  .sub-tit1{
    color:#aaa;
    font-size: 12px;
    line-height:20px;
  }
</style>
<style>
  .m-gujia{
    padding:60px 0;
    background-image:url(../../static/img/flower.png);
    box-sizing:border-box;
  }
  .m-gujia .wrap1{
    width: 990px;
    margin: 0 auto;
    overflow: hidden;
    box-sizing: border-box;
  }
  .box-a{
    float: left;
    /*line-height:54px;*/
    box-sizing: border-box;

  }
  .dingjia{
    font-size: 28px;
    font-weight: bold;
    color:#fff;
  }
  .cankao{
    margin-top:12px;
    color:#fff;
  }

  .box-b{
    float: right;
    position: relative;
    line-height:54px;
    font-size:20px;
    cursor:pointer;
  }
  .box-b .icon-money{
    float: left;
    width: 24px;
    height: 26px;
    margin-top: 14px;
    margin-left: 20px;
    background:url(../../static/img/sprite2.png) -427px -137px;

  }
  .box-b .mark{
    background: #fff;
    opacity: .1;
  }
  .box-b .txt{
    float: left;
    width: 400px;
    margin-left: 20px;
    color:#e1dfd6;
    /*background-color: #fff;*/

  }
  .box-b .mark{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .icon-gujia{
    position:relative;
    width: 155px;
    height: 54px;
    float: right;
    z-index:1;
    text-align: right;
    font-weight:bold;
    color:#000;
    padding-right:24px;
    box-sizing: border-box;
    background:url(../../static/img/sprite2.png) -104px -292px;
  }

</style>
<style>
  .getapp{
    background-image:url(../../static/img/bg-app.jpg);
    background-repeat:no-repeat;
    background-position:center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .getapp .wrap2{
    width: 990px;
    height: 670px;
    margin:0 auto;
  }
</style>
