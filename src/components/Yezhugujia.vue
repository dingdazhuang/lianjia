<template>
<div style="margin-bottom:60px">
    <div class="g-title">
       <h1>我要估价</h1>
       <p>8000+全国链家门店 10万+全国经济人 链家倾情服务15年+</p>
    </div>
    <div class="m-form clear">
      <div class="box1">
         <dl>
           <dt>小区</dt>
           <dd>
             <div>
               <input type="text" placeholder="请输入小区名">
             </div>
           </dd>
         </dl>
        <dl>
          <dt>建筑年代</dt>
          <dd>
            <div>
              <input type="text" placeholder="输入年代">
            </div>
          </dd>
        </dl>
        <dl>
          <dt>小区</dt>
          <dd>
              <input type="number" min="0" placeholder="请输入大于零的数字">
              <span>平方米</span>
          </dd>
        </dl>
        <dl>
          <dt>户型</dt>
          <dd>
            <div>
              <input type="text" placeholder="请输入小区名">
            </div>
          </dd>
        </dl>
        <dl>
          <dt>朝向</dt>
          <dd>
            <div>
              <input type="text" placeholder="请输入小区名">
            </div>
          </dd>
        </dl>
        <dl>
          <dt>楼层</dt>
          <dd>
            <div>
              <input type="text" placeholder="请输入小区名">
            </div>
          </dd>
        </dl>
        <dl>
          <dt>房源特色</dt>
          <dd>
            <div>
              <input type="text" placeholder="请输入小区名">
            </div>
          </dd>
        </dl>
      </div>
      <div class="box2">
        <div class="text">
          基于链家庞大的真实成交与在售房源数据，让链家估价可以实时客观地预估每套房屋价格
        </div>
        <div class="icon-house"></div>
      </div>
    </div>
    <div class="m-submit">
       <div class="btn-sumbit">
         <button>去估价</button>
       </div>
      <div class="btn-gujia-text">估值结果由链家系统模型提供</div>
    </div>
</div>
</template>


<script>
  export default{
     data(){
         return{
             msg:'卖房'
         }
     }
  }

</script>





<style>
  dt{
    margin:0
  }
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
    font-size:16px;
  }
  .m-form .box1 dd{
    float: right;
    width: 470px;
  }




  .m-form .box2{
     float: right;
     padding-top:30px;
     border-top:4px solid #f6f6f6;
     width: 340px;
     border-bottom:4px solid #f6f6f6;
  }
  .m-form .box2 .text{
    color:#666;
    font-size:16px;
    text-align: center;
    line-height:26px;
    padding:0 50px;
  }

  .icon-house{
    width: 107px;
    height: 85px;
    background:url(../../static/img/sprite2.png) -320px -112px;
    margin:33px auto;
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
  .btn-gujia-text{
    width: 190px;
    margin:0 auto;
    /*text-align: center;*/
    margin-top: 20px;
    color:#999;
    font-size: 13px;
  }
</style>
