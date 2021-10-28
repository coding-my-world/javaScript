$(function () {
    var str = '<div class="daoliu-box" style="width:178px;height:auto;position:fixed;left:0;top:45%;z-index:9999"><img src="https://img.58cdn.com.cn/arthurupload/lbg-fe/app/daoliu@2x.png" style="width:100%;height:178px"><img src="https://img.58cdn.com.cn/arthurupload/lbg-fe/app/daolius1s@2x.png" class="dl-ewm" style="display:none;width:140px;height:183px;position:absolute;left:10px;top:170px;"></div>'
    $('body').append(str);
    $('.daoliu-box img').eq(0).bind("mouseenter", function (e) {
        $('.dl-ewm').show();
    });
    ;
    $('.daoliu-box').bind("mouseleave", function (e) {
        $('.dl-ewm').hide();
    });
    var timer = setInterval(function () {
        if (window.clickLog) {
            clickLog('from=qrcode_show');
            clearInterval(timer);
        }
    }, 200);
})