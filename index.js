const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const req = require("express/lib/request");
const mongoose = require("mongoose");
const accountRoutes = require("./Routes/account");
const bankRoutes = require("./Routes/bank");

//create express
const server = express();

//Middleware
server.use(bodyParser.json());

//Routes
server.use(accountRoutes);
server.use(bankRoutes);

//connect to database and start server
mongoose
  .connect(
    "mongodb+srv://CT_User:8SSCdQweQAeuBGxH@cluster0.h2f7s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then((result) => {
    server.listen(1000, () => console.log("server is ready"));
  })
  .catch((err) => console.log(err));
