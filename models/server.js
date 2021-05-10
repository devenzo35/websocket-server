const express = require("express");
const cors = require("cors");
require("dotenv").config();
const http = require("http");
const { messageSocket } = require("../controllers/controllers");

class Server {
  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.io = require("socket.io")(this.server);
    this.middlewares();
    this.routes();
    this.sockets();
  }

  routes() {
    //this.app.use(this.endpoints.users, require("../routes/user"));
  }

  middlewares() {
    this.app.use(express.static("public"));
    this.app.use(cors());
  }

  sockets() {
    this.io.on("connection", (socket) => {
      console.log("User connected");

      socket.on("disconnect", () => {
        console.log("User disconnected");
      });
    });
    this.io.on("connection", messageSocket);
  }

  listen() {
    this.server.listen(process.env.PORT, () => {
      console.log(`Running in ${process.env.PORT}`);
    });
  }
}

module.exports = Server;
