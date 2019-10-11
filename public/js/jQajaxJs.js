$(document).ready(function () {
   $("button").click(function () {
      $("#div1").load("public/ajax/demo_test.txt #p1",function (responseTxt,statusTxt,xhr) {

         if(statusTxt=="success")
             alert("外部资源加载成功！");
         if(statusTxt=="error")
             alert("Error:"+xhr.status+": "+xhr.statusText);
      });
   });

});