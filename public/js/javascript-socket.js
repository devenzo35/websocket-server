const onlineEl = document.getElementById("online");
const offlineEl = document.getElementById("offline");
const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("button");

const socket = io();

socket.on("connect", () => {
  console.log("user connected");

  offlineEl.style.display = "none";
  onlineEl.style.display = "";
});

socket.on("disconnect", () => {
  console.log("user disconnected");

  onlineEl.style.display = "none";
  offlineEl.style.display = "";
});

socket.on("send-message", (message) => {
  console.log(message);
});

buttonEl.addEventListener("click", () => {
  const inputValue = inputEl.value;
  const message = {
    name: "Juancho",
    message: inputValue,
    id: "14834092-89324u832",
  };
  socket.emit("send-message", message, (id) => {
    console.log("send-algo", id);
  });
});
