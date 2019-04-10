'use strict';

// メモを画面上に表示する
function memo() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();
    if(message === '' || message === ' ' || message === '\n' || message === '　'){
      alert('メッセージが入力されていません');
      $('#message').val('');
      return false;
    }
    // メモの内容を表示
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

    const str = $('#message').val();

    const message2 = userName + 'さんのメモ:' + '<div class = "memo">' + str.replace(/\r?\n/g, '<br>')
      + '<span class = "time">'  + dr + '</span>' + '</div>';
  //  const message = userName + 'さん:' + '<div class = "toukou">' + str.replace(/\r?\n/g, '<br>') + '<br>' +  dr + '</div>' ;

    $('#thread').prepend('<p>' +  message2  +　'</p>');
    $('#message').val('');
    return false;
}
