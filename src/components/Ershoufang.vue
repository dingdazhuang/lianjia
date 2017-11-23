<template>
<div>
    <!--第一行 -->
   <div class="header">
       <div class="menu clear">
            <!--左侧-->
           <div class="menuleft">
               <a href="logo" class="logo"></a>
               <ul class="typeList">
                   <li class="selected"><a href="#">在售</a></li>
                   <li><a href="#">成交</a></li>
                   <li><a href="#">小区</a></li>
                   <li><a href="#">房价</a></li>
                   <li><a href="#">地图找房</a></li>
               </ul>
           </div>
           <!--右侧搜索框-->
           <div class="search">
               <div class="input">
                   <div class="ershoufang" >
                       <form action=""id="searchForm">
                           <span class="downArrow" data-b1="switch">
                               <span class="state">在售</span>
                               <i></i>
                           </span>
                           <span class="sstate" style="display:none">
                               <span data-b1="1">在售</span>
                               <span data-b1="2">成交</span>
                               <span data-b1="3">小区</span>
                           </span>
                           <input type="text" id="searchInput" placeholder="请输入关键词搜索">
                           <button type="submit" class="searchBtn">
                              <i></i>
                           </button>
                       </form>
                   </div>
               </div>
           </div>
       </div>
   </div>
     <!--第二行-->
   <div class="sellDetailHead">
       <div class="title-wrapper">
           <div class="content clear">
               <div class="title">
                   <h1 class="main" title="凯德湖墅 小户型 总价低 房龄新 地段好">凯德湖墅 小户型 总价低 房龄新 地段好</h1>
                   <div class="sub" title="运河边，地段好，低总价小套，房龄新">运河边，地段好，低总价小套，房龄新</div>
               </div>
               <!--右边-->
               <div class="btnContainer">
                   <div>
                       <div class="action">
                           <button id="follow" class="followBtn">关注房源</button>
                           <span id="favCount" class="count">150</span>
                           人关注
                       </div>
                       <div class="action">
                           <button id="addToCart">预约看房</button>
                           <span id="cartCount" class="count">75</span>
                           人看过
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
   <!--第四行-->
   <div class="intro clear">
       <div class="container">
           <div class="fl">
               <a href="#">链家网杭州站</a>
               <span class="stp">&nbsp;>&nbsp;</span>
               <a href="#">杭州二手房</a>
               <span class="stp">&nbsp;>&nbsp;</span>
               <a href="#">拱墅二手房</a>
               <span class="stp">&nbsp;>&nbsp;</span>
               <a href="#">和睦二手房</a>
               <span class="stp">&nbsp;>&nbsp;</span>
               <a href="#">凯德湖墅二手房</a>
               <span class="stp">&nbsp;>&nbsp;</span>
               <a href="#">当前房源</a>
           </div>
       </div>
   </div>
   <!--第五行-->
   <div class="overview clear">
       <div class="img" id="topImg">
           <div class="imgContainer">
               <img src="../../static/img/md.1.jpg" alt="">
               <span>厅</span>
           </div>
       <div class="thumbnail" id="thumbnail2">
            <div class="pre"><</div>
            <ul class="smallpic">
                    <li :class="{selected:isSelected}" @click="ifSelected">
                        <img src="../../static/img/sm.1.jpg" alt="">
                    </li>
                    <li>
                        <img src="../../static/img/sm.2.jpg" alt="">
                    </li>
                    <li>
                        <img src="../../static/img/sm.3.jpg" alt="">
                    </li>
                    <li>
                        <img src="../../static/img/sm.4.jpg" alt="">
                    </li>
                    <li>
                        <img src="../../static/img/sm.5.jpg" alt="">
                    </li>
                     <li>
                        <img src="../../static/img/sm.6.jpg" alt="">
                    </li>
            </ul>
            <div class="next">></div>
       </div>
       </div>
       <!--右侧内容-->
       <div class="content1 fr" v-if="ershou.length>0">
           <span class="sharethis">
               <i></i>
               分享此房源
           </span>
           <span class="compareBtn">
               <span class="compareIcon"></span>
               <span class="compareText">加入对比</span>
           </span>
           <!--价格-->
           <div class="price">
               <span class="total">{{ershou[0].totalprice}}</span>
               <span class="unit">
                   <span>万</span>
               </span>
               <div class="text">
                   <div class="unitprice">
                       <span class="unitpricevalue">
                           {{ershou[0].unitprice}}
                           <i>万/平方米</i>
                       </span>
                   </div>
                   <div class="tax">
                       <span class="taxtext" title="首付80万 税费21万(仅供参考)">
                           {{ershou[0].tax}}
                       </span>
                       <span class="detail">详情</span>
                   </div>
               </div>
           </div>
            <!--2室一厅-->
            <div class="houseInfo clear">
                <div class="room">
                    <div class="mainInfo">{{ershou[0].room}}</div>
                    <div class="subInfo">{{ershou[0].room2}}</div>
                </div>
                <div class="type">
                    <div class="mainInfo" title="南">{{ershou[0].type}}</div>
                    <div class="subInfo">{{ershou[0].type2}}</div>
                </div>
                <div class="area">
                    <div class="mainInfo">{{ershou[0].area}}</div>
                    <div class="subInfo">{{ershou[0].area2}}</div>
                </div>
            </div>
            <!--旁边信息-->
            <div class="roundInfo">
                <div class="communityName">
                    <span class="label">小区名称</span>
                    <a href="#">{{ershou[0].community}}</a>
                    <a href="#">地图</a>
                </div>
                <div class="areaName">
                    <span class="label">所在区域</span>
                    <span class="info">
                        <a href="#">{{ershou[0].block}}</a>
                        <a href="#">{{ershou[0].block1}}</a>
                    </span>
                </div>
                <div class="visitTime">
                    <span class="label">看房时间</span>
                    <span class="info">{{ershou[0].visit}}</span>
                </div>
                <div class="houseRecord">
                    <span class="label">链家编号</span>
                    <span class="info">{{ershou[0].lisence}}
                        <span class="jubao">
                          <a href="#">举报</a>
                        </span>
                    </span>
                </div>
            </div>
            <!--雇主信息-->
            <div class="brokerInfo clear">
              <a href="#" class="fl LOGCLICK">
                <!--<img :src="require('../../static/'+ershou[0].img)" alt="图片失踪啦">-->
              </a>
              <div class="brokerText fr">
                <div class="brokerName">
                  <a href="#" class="name">{{ershou[0].bname}}</a>
                  <a href="#" title="沟通" class="new-talk">
                    <span class="im-icon"></span>
                    沟通
                  </a>
                  <span class="fr tag">
                    评分：{{ershou[0].commend}}/
                    <a href="#">{{ershou[0].commend2}}</a>
                  </span>
                </div>
                <div class="evalute">本房信息由我维护，有变化最快得知</div>
                <div class="phone">
                  {{ershou[0].phone}}
                   <span>转</span>
                  {{ershou[0].phone2}}

                </div>
              </div>
            </div>
       </div>
   </div>
   <div class="m-content">

   </div>
   <div id="pushContainer">
       <div class="push">
           <h3 class="pushheader">好房为你推荐</h3>
           <ul class="pushList clear">
             <li class="pushListItem">
               <div class="pic">
                 <img src="../../static/img/h1.jpg" alt="">
                 <span>180万</span>
               </div>
               <div class="htitle">
                 <span class="name">兰江四季金品</span>
                 <span class="info">3室2厅/86.82平米</span>
               </div>
               <div class="desc">综合条件和当前房源相似</div>
             </li>
             <li class="pushListItem">
               <div class="pic">
                 <img src="../../static/img/h1.jpg" alt="">
                 <span>180万</span>
               </div>
               <div class="htitle">
                 <span class="name">兰江四季金品</span>
                 <span class="info">3室2厅/86.82平米</span>
               </div>
               <div class="desc">综合条件和当前房源相似</div>
             </li>
             <li class="pushListItem">
               <div class="pic">
                 <img src="../../static/img/h1.jpg" alt="">
                 <span>180万</span>
               </div>
               <div class="htitle">
                 <span class="name">兰江四季金品</span>
                 <span class="info">3室2厅/86.82平米</span>
               </div>
               <div class="desc">综合条件和当前房源相似</div>
             </li>
             <li class="pushListItem">
               <div class="pic">
                 <img src="../../static/img/h1.jpg" alt="">
                 <span>180万</span>
               </div>
               <div class="htitle">
                 <span class="name">兰江四季金品</span>
                 <span class="info">3室2厅/86.82平米</span>
               </div>
               <div class="desc">综合条件和当前房源相似</div>
             </li>
             <li class="pushListItem">
               <div class="pic">
                 <img src="../../static/img/h1.jpg" alt="">
                 <span>180万</span>
               </div>
               <div class="htitle">
                 <span class="name">兰江四季金品</span>
                 <span class="info">3室2厅/86.82平米</span>
               </div>
               <div class="desc">综合条件和当前房源相似</div>
             </li>
             <li class="pushListItem">
               <div class="pic">
                 <img src="../../static/img/h1.jpg" alt="">
                 <span>180万</span>
               </div>
               <div class="htitle">
                 <span class="name">兰江四季金品</span>
                 <span class="info">3室2厅/86.82平米</span>
               </div>
               <div class="desc">综合条件和当前房源相似</div>
             </li>
             <li class="pushListItem">
               <div class="pic">
                 <img src="../../static/img/h1.jpg" alt="">
                 <span>180万</span>
               </div>
               <div class="htitle">
                 <span class="name">兰江四季金品</span>
                 <span class="info">3室2厅/86.82平米</span>
               </div>
               <div class="desc">综合条件和当前房源相似</div>
             </li>
             <li class="pushListItem">
               <div class="pic">
                 <img src="../../static/img/h1.jpg" alt="">
                 <span>180万</span>
               </div>
               <div class="htitle">
                 <span class="name">兰江四季金品</span>
                 <span class="info">3室2厅/86.82平米</span>
               </div>
               <div class="desc">综合条件和当前房源相似</div>
             </li>
           </ul>
       </div>
   </div>
   <div id="pushxinfang">
     <div class="pushxinfang">
       <h3 class="xinfangpushheader">同总价新房</h3>
       <ul class="xinfangpushList clear">
         <li class="xinfangPushItem">
           <a href="#">
              <img src="../../static/img/xin1.jpg" alt="">
              <div class="xinfangpushdecription">
                 <div class="title" title="拱墅-武林一号">
                   拱墅-武林一号
                 </div>
                 <div class="type">
                   <span>住宅</span>
                 </div>
              </div>
           </a>
           <div class="xinfangpushInfo">
             <p class="xinfangPushArea">5居 - 412~412平</p>
             <p class="xinfangPushPrice">均价：价格待定</p>
           </div>
         </li>
         <li class="xinfangPushItem">
           <a href="#">
             <img src="../../static/img/xin1.jpg" alt="">
             <div class="xinfangpushdecription">
               <div class="title" title="拱墅-武林一号">
                 拱墅-武林一号
               </div>
               <div class="type">
                 <span>住宅</span>
               </div>
             </div>
           </a>
           <div class="xinfangpushInfo">
             <p class="xinfangPushArea">5居 - 412~412平</p>
             <p class="xinfangPushPrice">均价：价格待定</p>
           </div>
         </li>
         <li class="xinfangPushItem">
           <a href="#">
             <img src="../../static/img/xin1.jpg" alt="">
             <div class="xinfangpushdecription">
               <div class="title" title="拱墅-武林一号">
                 拱墅-武林一号
               </div>
               <div class="type">
                 <span>住宅</span>
               </div>
             </div>
           </a>
           <div class="xinfangpushInfo">
             <p class="xinfangPushArea">5居 - 412~412平</p>
             <p class="xinfangPushPrice">均价：价格待定</p>
           </div>
         </li>
         <li class="xinfangPushItem">
           <a href="#">
             <img src="../../static/img/xin1.jpg" alt="">
             <div class="xinfangpushdecription">
               <div class="title" title="拱墅-武林一号">
                 拱墅-武林一号
               </div>
               <div class="type">
                 <span>住宅</span>
               </div>
             </div>
           </a>
           <div class="xinfangpushInfo">
             <p class="xinfangPushArea">5居 - 412~412平</p>
             <p class="xinfangPushPrice">均价：价格待定</p>
           </div>
         </li>
         <li class="xinfangPushItem">
           <a href="#">
             <img src="../../static/img/xin1.jpg" alt="">
             <div class="xinfangpushdecription">
               <div class="title" title="拱墅-武林一号">
                 拱墅-武林一号
               </div>
               <div class="type">
                 <span>住宅</span>
               </div>
             </div>
           </a>
           <div class="xinfangpushInfo">
             <p class="xinfangPushArea">5居 - 412~412平</p>
             <p class="xinfangPushPrice">均价：价格待定</p>
           </div>
         </li>
       </ul>
     </div>
   </div>
   <div id="m-yezhu" class="clear">
     <div class="wrap">
        <h3 class="sellhouse">我有房子要卖</h3>
       <ul>
         <li>
           <div class="mask"></div>
           <div>
             <h1>不知道如何定价</h1>
             <p>每天超过30000次估价请求量</p>
             <a href="#">我要估价></a>
           </div>
         </li>
         <li>
           <div class="mask"></div>
           <div>
             <h1>不知道如何定价</h1>
             <p>每天超过30000次估价请求量</p>
             <a href="#">我要估价></a>
           </div>
         </li>
         <li>
           <div class="mask"></div>
           <div>
             <h1>不知道如何定价</h1>
             <p>每天超过30000次估价请求量</p>
             <a href="#">我要估价></a>
           </div>
         </li>

       </ul>
     </div>
   </div>
</div>
</template>



<script>
    export default{

      data(){
          return{
              msg:'二手房页面',
              isSelected:false,
              ershou:[]
          }
      },
      methods:{
          loadData(){
            this.$http.get('http://1.lianjiayezhu.applinzi.com/data/ershoufang/ershoufang.php')
              .then(function(response){
                  console.log(response.data.ershoufang);
                  this.ershou=response.data.ershoufang;

              })
          },
         ifSelected(){
             this.isSelected=true
         }
      },
      mounted(){
          this.loadData();
      }

    }
</script>


<style>
  .fl{
      float: left;
  }
  .fr{
      float:right;
  }
   .clear:after{
       content:'';
       display:block;
       clear:both
   }
   input,button,h1,h2,h3,h4,h5,h6,ul,table,li{
       padding:0;
       margin:0;padding:0;
       outline:none;border:0;
   }
   div.header{
       width: 100%;
       padding-top:30px;
       font-size:14px;
       line-height:1 ;
       background: #f5f5f5;
   }
   div.menu{
       width: 1150px;
       margin:0 auto;
       overflow:hidden;

   }
   .menuleft{
       float: left;
       line-height:45px;

   }
   .menuleft a.logo{
       display:inline-block;
       width: 100px;
       height: 32px;
       background:url(../../static/img/sprite.png) -385px -591px;
   }
   ul.typeList{
       display: inline-block;
       line-height:26px;
       margin-left:30px;
   }
   ul.typeList li{
            float: left;
            margin-right:30px ;
   }
   ul.typeList li a{
       font-size:16px;
       color:#394043;
   }
    ul.typeList li.selected a{
        color:#00ae66;
    }
    /*右侧搜索框*/
       div.search{
           float:right;
           width: 345px;
           height: 45px;
           background:#ebeced;
           border-radius:2px;
           font-size:12px;
       }
       .downArrow i{
           display: inline-block;
           width:5px;
           height:3px;
           vertical-align: 3px;
           background:url(../../static/img/sprite.png) -589px -113px;
       }
       .state{
           display:inline-block;
           line-height:45px;
           font-weight:bold;
           color:#394043;
           padding-left: 18px;
           padding-right:10px;
           cursor:pointer;
       }
       .downArrow{
           display:inline-block;
           height:20px;
           margin-right: 18px;
       }
        #searchInput{
          width: 60%;
          height: 60%;
          background: #ebeced;
        }
        .searchBtn{
          width: 50px;
          height: 45px;
          background: #ebeced;
          cursor:pointer;
        }
        .searchBtn i{
            display:inline-block;
            width: 17px;
            height: 17px;
            background:url(../../static/img/sprite.png) -589px -96px;

        }
</style>
<style>
    .sellDetailHead{
        padding:37px 0 26px;
        background: #f5f5f5;
    }
    .title.wrapper{
        position:relative;
    }
    .title{
       float:left;
    }
    .content{
        width: 1150px;
        margin:0 auto;
    }
    .title .sub{
        color:#aaa;
        margin-top:15px;
        max-width:790px;
        line-height:1.2;
    }
    /*右侧*/
    .btnContainer{
       float: right;
    }
    .btnContainer>div{
    width:703px;
    }
    div.action{
        margin-left: 20px;
        position:relative;
        left:433px;
        color:#b0b3b4;
        font-size:12px;
        text-align:center;
        display:inline-block;
    }
    div.action button{
        display:block;
        -webkit-box-shadow:0 1px 3px rgba(0,0,0,0.2);
        width: 113px;
        height:45px;
        background: #fff;
        border-radius:2px;
        color:#394043;
        font-size: 14px;
        text-align:center;
        cursor:pointer;
    }
    #addToCart{
        background:#00ae66;
        color:#fff;
    }
    div.action span{
        display:inline-block;
        margin-top:10px;
    }
</style>
<style>
   div.intro{
       width: 1150px;
       height:67px;
       line-height:66px;
       border-top:0;
       margin:0 auto;
   }
   span.stp{
       color:#999;
       font-family:simsun;
   }
   div.overview{
       width: 1150px;
       position: relative;
       margin:0 auto;
   }
   .img{
       float: left;
       cursor:pointer;
   }
   div.imgContainer{
       width: 710px;
       height: 400px;
       position: relative;
   }
   div.imgContainer span{
       position: absolute;
       bottom:20px;
       left:10px;
       line-height:32px;
       padding:0 11px;
       background:rgba(0,0,0,0.7);
       border-radius:3px;
       color:#fff;
   }

   div.thumbnail{
       position:relative;
       margin-top:8px;
       width:710px;
       height:82px;
   }
   div.pre{
       float: left;
       position:absolute;
       left:0;
       bottom:0;
       width:30px;
       line-height:82px;
       text-align:center;
       font-size:20px;
       color:#cac9c9;
       background:rgba(0,0,0,0.7);
   }
   div.next{
       float: right;
       position:absolute;
       right:0;
       bottom:0;
       width:30px;
       line-height:82px;
       text-align:center;
       font-size:20px;
       color:#cac9c9;
       background:rgba(0,0,0,0.7);
    }
    ul.smallpic{
        margin-left: 31px;
        width: 640px;
        height:82px;
        overflow:hidden;
        font-size: 0;
        white-space: nowrap;
    }

     ul.smallpic li{
        /*display:inline-block;*/
       float: left;
       width: 120px;
        height: 82px;
        text-align:center;
        margin-left: 8px;
   }
    ul.smallpic li img{
        width: 100%;
        height:100%;
        vertical-align:top;
        opacity:.6 ;
        }
     ul.smallpic li:hover img,
     ul.smallpic li.selected img{
         opacity:1
     }

     div.content1{
         float: right;
         color:#394043;
         width: 380px;
     }
     span.sharethis{
         position:absolute;
         top:-39px;
         right:0
     }
      span.sharethis i{
        display:inline-block;
        width: 12px;
        height:12px;
        margin-right: 6px;
        background:url(../../static/img/sprite.png) -530px -173px;
     }
     span.compareBtn{
         position:absolute;
         top:-39px;
         right:108px;
     }
     span.compareIcon{
         display: inline-block;
         height:13px;
         width: 13px;
         background:url(../../static/img/sprite.png) -510px -185px;
     }
</style>
<style>
  .price{
       height:49px;
       position: relative;
  }
  .total{
      display: inline-block;
      font-family:Tahoma;
      font-size:46px;
      color:#e4393c;
      font-weight:bold;
      line-height:46px;
  }
  .unit{
      display: inline-block;
      height: 37px;
      font-size: 16px;
      color:#e4393c;
  }
  .unit span{
      display:block;
      margin-top:9px;

  }
        div.text{
            display:inline-block;
            margin-left: 15px;
        }
        div.unitprice{
          font-size: 16px;
          color:#394043;
        }
        .unitpricevalue{
            font-weight: bold;
        }
        .unitpricevalue i{
            font-weight: normal;
            font-style: normal;
        }
        span.detail{
            color:#999;
            cursor:pointer;
        }
        div.tax{
            margin-top:11px ;
        }

</style>
<style>
   div.houseInfo{
       box-sizing:border-box;
       margin-top: 22px;
       padding:30px 0;
       width: 100%;
       border-top:1px solid #eee;
       border-bottom:1px solid #eee;
       box-sizing:border-box;
   }
    .houseInfo>div{
        float: left;
    }
    .room,.type,.area{
        width: 33%;
    }
    .mainInfo{
        font-size:20px;
        color:#333;
        font-weight: bold;
        overflow: hidden;
    }
    .subInfo{
        margin-top: 8px;
        color:#394043;
        font-size:12px;
        overflow: hidden;
    }

    .roundInfo{
        padding:24px 0;
        font-size:14px;
        border-bottom:1px solid #eee;
        line-height: 18px;
    }
    .roundInfo span.label{
      color:#aeb0b1;
      margin-right:24px;
      font-size:14px;
    }
  .communityName a{
    color:#333;
    font-size:14px;
    text-decoration: underline;
  }
   a.map{
     margin-left:14px;
   }
  .areaName,.visitTime,.houseRecord{
    margin-top:14px;
  }
   .areaName a:hover{
     text-decoration:underline;
   }
  .info a{
    color:#333;font-size:14px;
  }
   .info{
    color:#333;
    font-size: 14px;
  }
  .info .jubao:hover a{
    text-decoration:underline;
  }

  .brokerInfo{
    padding-top:40px;
    padding-bottom:35px;
    border-bottom:1px solid #eee;
    font-size:0;
  }

   .brokerText{
     width: 299px;
   }
   span.tag{
     line-height:20px;
     vertical-align: middle;
   }
  .brokerName .name{
    font-size:18px;
    color:#394043;
    margin-right: 3px;
    font-weight:bold;
  }
  .new-talk{
    display:inline-block;
    width: 50px;
    height: 20px;
    text-align: center;
    font-size: 12px;
    line-height: 18px;
    border:1px solid #4285f4;
    box-sizing: border-box;
    margin:0 4px;
    border-radius:3px;
    color: #4285f4;
  }
  .im-icon{
    display:inline-block;
    width: 13px;
    height: 12px;
    background:url(../../static/img/sprite.png) -469px -173px;
    vertical-align: -1px;
  }
  .evalute{
    margin-top:12px;
  }
  .phone{
    margin-top: 10px;
    font-size:  26px;
    font-weight:bold;
    font-family: Tohoma;
    color:#e4393c;
    letter-spacing:-1px;
  }
  .phone span{
    font-size: 14px;
    padding:0 6px;
  }
   .m-content{
     width: 1150px;
     padding-top:55px;
     margin:0 auto;
   }

   .push{
     width: 1150px;
     margin:70px auto 0 auto;
   }
  h3.pushheader{
    margin:0 auto 25px auto;
    font-size:23px;
    line-height:23px;
    font-weight:bold;
  }
  ul.pushList{
    margin-top:34px;
    margin-right:-10px
  }
  li.pushListItem{
    margin-right:10px;
    margin-bottom:26px;
    float: left;
  }
  .pic{
    position:relative;
  }
  .pic span{
    position:absolute;
    bottom:20px;
    left:0;
    padding:0 10px;
    color:#fff;
    line-height:20px;
    background:#394043;
    border-radius:3px;
  }
  .htitle{
    margin-top: 15px;
  }
   .htitle .name{
     font-size: 16px;
     font-weight:bold;
   }
   .htitle .info{
     margin-left:5px;
     font-size: 12px;
     color:#616669;
   }
   .desc{
     margin-top: 6px;
     font-size: 12px;
     color:#b0b3b4;
   }
  .pushxinfang{
    width: 1150px;
    margin:54px auto 0 auto;
    padding-bottom:35px;
  }
  .xinfangpushheader{
    font-size: 23px;
    margin-top:50px;
  }
  .xinfangpushList{
    margin-top: 32px;
    margin-right: -10px;

  }
  .xinfangpushInfo{
    margin-top: 20px;
    color:#394043;
    font-weight:bold;
    font-size: 14px;
  }
  .xinfangPushItem{
    position:relative;
    float: left;
    margin-right:10px;

  }
   .xinfangPushArea{
     color:#888c8e;
     font-size: 12px;
   }
   .xinfangPushPrice{
     font-size: 14px;
   }
  .xinfangpushdecription{
    position:absolute;
    width:100%;
    text-align: center;
    right: 0;
    bottom:120px;
  }
   .xinfangpushdecription .title{
     width: 100%;
     font-size:16px;
     font-weight:bold;
     text-align: center;
     color:#fff;
   }
   .xinfangpushdecription .type{
     width: 100%;
     text-align: center;
     margin-top:5px;
   }
   .xinfangpushdecription .type span{
     margin-top:5px;
     padding:4px 6px;
     background: rgba(0,0,0,0.7);
   }
   #m-yezhu{
     margin-top: 70px;
     margin-bottom:30px;
   }
  #m-yezhu .wrap{
    width: 1150px;
    margin:0 auto;
  }
  h3.sellhouse{
    font-size: 26px;
  }
   #m-yezhu ul{
     padding-top:32px;
     text-align: center;
     font-size:0;
   }
   #m-yezhu ul li{
     width: 375px;
     height: 115px;
     float: left;
     position:relative;
     background:url(../../static/img/yezhu-gujia.png) no-repeat;
     padding-top:45px;
   }
   #m-yezhu ul li:not(:first-child){
     margin-left:12px;
   }
   #m-yezhu ul li h1{
     color:#fff;
     position:relative;
     z-index:2;
     margin-bottom:14px;
   }
   #m-yezhu ul li p{
     color:#d0d1d2;
     margin-bottom:14px;
     font-size:14px;
     position:relative;
     z-index:2;
   }
   #m-yezhu ul li a{
     color:#fff;
     position: relative;
     z-index:2;

   }
  .mask{
    position:absolute;
    background:#000;
    opacity: .4;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
</style>
