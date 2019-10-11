$(document).ready(function () {
    $('form').submit(function () {
       alert('submit successful.');
    });

    $('button[name="tijiao"]').click(function () {
        $('form').submit();
    });
    
    $('input[name="chantest"]').change(function () {
        alert("内容已更改。");
    });
    
    $('input[name="foctest"]').focus(function () {
        $('span[name="foctest"]').css('display','inline');
    });

    $('input[name="foctest"]').blur(function () {
        $('span[name="foctest"]').css('display','none');
    })
});