$(function () {
    // var now = new Date();
    // var y = now.getFullYear();
    // var m = now.getMonth() + 1;
    // var d = now.getDate();
    // var w = now.getDay();
    // var wd = ['日', '月', '火', '水', '木', '金', '土'];
    // $('#date').text(y + '年' + m + '月' + d + '日' + '(' + wd[w] + ')');
    // //もしメニュー追加されたら、~日付までのメニューを追加させる
    // $('#menu-date').text(m + '月' + d + '日' + '(' + wd[w] + ')');



    // if ($('#js-modal')) { 　//リファクタ必要
        $('#js-modalHide').on('click', function () {
            console.log('jQuery: モーダルを非表示にします');
            $('#js-modal').hide();
        });
    // }

});