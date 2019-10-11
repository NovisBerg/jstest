$(document).ready(function () {
   $("button:eq(0)").click(function () {
      $("#div1").load("public/ajax/demo_test.txt #p1",function (responseTxt,statusTxt,xhr) {

         if(statusTxt=="success")
             alert("外部资源加载成功！");
         if(statusTxt=="error")
             alert("Error:"+xhr.status+": "+xhr.statusText);
      });
   });

   $("#butt1").click(function () {
       $.get("echo.php",function (data,status) {
            alert("获得的数据为："+data+"\n状态："+status);
       });
   });
});