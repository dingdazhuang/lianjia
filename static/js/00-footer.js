/**
 * Created by WEB-UID-JAVA on 2017/10/14.
 */
/**页面尾部*/
(()=>{
    $.get("footer.html",(html)=>{
        $("div.footer").html(html);
        $(document.head).append('<link rel="stylesheet" href="css/footer.css">');
        $spans= $("div.tab span");
        var list= $("div.link-list");
        for(var span of $spans){
            $span=$(span);
            $span.mouseover(e=>{
             $(e.target).addClass("hover").siblings().removeClass("hover");
                //列表显示项
             var num=$(e.target).index();
            $("div.link-list").children(":eq("+num+")")
                 .css("display","block").siblings().css("display","none");
            });
        }

    })
})()

