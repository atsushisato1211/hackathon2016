'use strict';

module.exports = function (socket) {
    // 退室メッセージをクライアントに送信する
    socket.on('exit1', function (data) {
      if (!data) {
          return;
      }
      socket.broadcast.emit('exit2',data);
    });
};
