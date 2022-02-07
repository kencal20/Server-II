const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const req = require("express/lib/request");
const {
  listBankController,
  creatBankController,
  updateBankController,
  deleteBankController,
} = require("./controllers");


//create express
  const server = express();

//Middleware
server.use(bodyParser.json());

//Routes
//view - get method
server.get("/bank", listBankController);
//create - post method
server.post("/bank", creatBankController);
//update - put method
server.put("/bank", updateBankController);
//delete - delete method
server.delete("/bank", deleteBankController);

server.listen(1000, () => console.log("server is ready"));
