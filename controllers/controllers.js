const messageSocket = (socket) => {
  socket.on("send-message", (message, callback) => {
    console.log(message);
    socket.broadcast.emit("send-message", message);
    callback(socket.id);
  });
};

module.exports = {
  messageSocket,
};
