const express = require("express");
const cors = require("cors");
require("dotenv").config();

class Server {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  async DBConnection() {
    await connection();
  }

  routes() {
    //this.app.use(this.endpoints.users, require("../routes/user"));
  }

  middlewares() {
    this.app.use(express.static("public"));
    this.app.use(cors());
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`Running in ${process.env.PORT}`);
    });
  }
}

module.exports = Server;
