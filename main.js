$(document).ready(function(){
    $("#back-to-top").click(function (e) { 
        //找到 html, body 執行動畫 ({動畫屬性: 值}, 時間)
        $("html, body").animate({scrollTop: 0}, 800);
    });
    // 視窗 - window
    // 捲動 - scroll()
    $(window).scroll(function () { 
        // 輸出訊息至控制台
        // console.log('捲動中~');
        // scrollTop() 元素的上方位置
        //console.log($(window).scrollTop());
        if($(window).scrollTop() >= 200) {
            $("#back-to-top").fadeIn(500);
        }
        else {
            $("#back-to-top").fadeOut(500);
        }
    });

    $('.nav-link').click(function (e) {
        //link = 點選的屬性:href 的值
        var link = $(this).attr('href');
        //console.log(link);
        
        var target_speed = $(this).attr('data-speed');
        //console.log(target_speed);

        // 取得目標標題.位移().上方
        var target_top = $(link).offset().top;
        $('html, body').animate({scrollTop: target_top}, parseInt(target_speed));

    });
});