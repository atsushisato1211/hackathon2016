'use strict';

// チャットルームに入室する
function enter() {
    // 入力されたユーザ名を取得する
    const userName = $('#userName').val();
    // ユーザ名が未入力でないかチェックする

    if(userName ===''){
      alert('ユーザ名が入力されていません');
      return false;
    }

    $('form').submit();
}

$(function() {
  $("input").keydown(function(e){
    if(e.keyCode && e.keyCode ===13){
      enter();
      return false;
    }
  });
});
