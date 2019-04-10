'use strict';

// 入室メッセージをサーバに送信する
// 入力されたユーザ名を取得する
const userName = $('#userName').val();

// 入力されたメッセージを取得
const message =userName + 'さんが入室しました。';
// 投稿内容を送信
socket.emit('enter1',message);




// サーバから受信した入室メッセージを画面上に表示する
socket.on('enter2', function (data) {
    $('#thread').prepend('<p>' +data+ '</p>');
});
