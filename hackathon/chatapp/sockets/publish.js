'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('msg1', function (data) {
      if (!data) {
          return;
      }
      socket.broadcast.emit('msg2',data);
    });
};
