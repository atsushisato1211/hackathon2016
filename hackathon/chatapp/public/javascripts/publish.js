'use strict';
// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const check = $('#message').val();
    if(check === '' || check === ' ' || check === '\n' || check === '　'){
      alert('メッセージが入力されていません');
      $('#message').val('');
      return false;
    }
    //時刻を取得
    var now = new Date();
    var y = now.getFullYear();
    var m = now.getMonth() + 1;
    var d = now.getDate();
    var w = now.getDay();
    var wd = ["日", "月", "火", "水", "木", "金", "土"];
    var h = now.getHours();
    var mi = now.getMinutes();
    var s = now.getSeconds();

    if(m < 10) { m = "0" + m; }
    if(d < 10) { d = "0" + d; }
    if(h < 10) { h = "0" + h; }
    if(mi < 10) { mi = "0" + mi; }

    var dr = (y + "/" + m + "/" + d + "(" + wd[w] + ")" + " " + h + ":" + mi );

    //時刻、名前、メッセージの結合
    const str = $('#message').val();

    const message = userName + 'さん:' + '<div class = "toukou">' + str.replace(/\r?\n/g, '<br>')
    + '<span class = "time">' + dr + '</span>' + '</div>';

    // 投稿内容を送信
    socket.emit('msg1',message);
    $('#thread').prepend('<p><font color="#ff0000">' + message +'</p>');
    //$('#thread').prepend('<div class = "time">' + dr + '</div> ''<p><font color="#ff0000">' + message +'</p>');
    $('#message').val('');
    return false;
}
// サーバから受信した投稿メッセージを画面上に表示する
socket.on('msg2', function (data) {
    $('#thread').prepend('<p>' + data  + '</p>');
});

function time1(){
  $('span').show();
}

function time2() {
  $('span').hide();
}
