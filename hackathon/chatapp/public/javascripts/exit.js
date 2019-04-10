'use strict';

// 退室メッセージをサーバに送信する
function exit() {
    // ユーザ名取得
    const userName = $('#userName').val();
    // 退室メッセージイベントを送信する
    const msg = userName + 'さんが退出しました';
    socket.emit('exit1',msg);

    // 退室
    location.href = '/';
}

// サーバから受信した退室メッセージを画面上に表示する
socket.on('exit2', function (data) {
    $('#thread').prepend('<p>' + data + '</p>');
});
