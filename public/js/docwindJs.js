$(document).ready(function () {

    x = 0;
    $(window).resize(function(){
        $("span[name='ckcount']").text(x+=1);
    });

    // $('img').load(function () {  //于jQuery1.8版本被移除
    //     alert("图片已载入！");
    // });

    // $(window).unload(function(){  //unload() 方法在 jQuery 版本 1.8 中被废弃，在 3.0 版本被移除。
    //     alert("Goodbye!");
    // });

    y = 0;
    $(document).ready(function(){
        $("div[name='gdcount']").scroll(function(){
            $("span[name='gdcount']").text(y+=1);
        });
    });
});