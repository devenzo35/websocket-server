const express = require("express");
const cors = require("cors");
require("dotenv").config();
const http = require("http");

class Server {
  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.middlewares();
    this.routes();
  }

  routes() {
    //this.app.use(this.endpoints.users, require("../routes/user"));
  }

  middlewares() {
    this.app.use(express.static("public"));
    this.app.use(cors());
  }

  listen() {
    this.server.listen(process.env.PORT, () => {
      console.log(`Running in ${process.env.PORT}`);
    });
  }
}

module.exports = Server;
