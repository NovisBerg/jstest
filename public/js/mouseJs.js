$(document).ready(function () {
    $("button").click(function () {
        $(":button").hide();
    });
    $("h2").dblclick(function () { //当h2标签被双击
        alert("该段落被双击！");
    });
    $("p[id='xiaoshi']").mouseenter(function () {  //判断鼠标是否浮动到了id为xiaoshi的p标签上
        $(this).css("background-color", "yellow");  //将背景色换成黄色
    });
    $("p[id='xiaoshi']").mouseleave(function () {  //判断鼠标是否离开了id为xiaoshi的p标签
        $(this).css('background-color', 'blue');
    });
    //hover() 方法规定当鼠标指针悬停在被选元素上时要运行的两个函数。方法触发 mouseenter 和 mouseleave 事件。注意: 如果只指定一个函数，则 mouseenter 和 mouseleave 都执行它。
    $('p:first').hover(function () {  //p:first表示选择第一个p标签
        $(this).css('background-color', 'green');
    }, function () {
        $(this).css('background-color', 'red');
    });
    $("input:eq(1)").keydown(function(){   //选择第二个input标签
        $(this).css("background-color","yellow");
    });
    $("input[name='JPceshi']").keyup(function(){    //选择name为JPceshi的input标签
        $(this).css("background-color","pink");
    });
});