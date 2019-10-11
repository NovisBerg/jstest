$(document).ready(function () {
   $('img').load(function () {
       alert("图片已载入！");
   });

    $(window).resize(function(){
        $("span[name='ckcount']").text(x+=1);
    });
});