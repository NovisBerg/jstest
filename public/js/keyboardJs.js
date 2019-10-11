$(document).ready(function () {
    $("input:eq(1)").keydown(function(){   //选择第二个input标签
        $(this).css("background-color","yellow");
    });
    $("input[name='JPceshi']").keyup(function(){    //选择name为JPceshi的input标签
        $(this).css("background-color","pink");
    });

    var i=0;

    $("input:eq(1)").keypress(function(){
        $("span").text(i+=1);   //每当按键时，span标签的内容自增1
    });
});