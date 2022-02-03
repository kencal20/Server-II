const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const req = require("express/lib/request");

const server = express();

//Middleware
server.use(bodyParser.json());

//Controllers
const listBankController = (req,res)=>{

}
const creatBankController= (req,res)=>{

}
const updateBankController=(req,res)=>{

}
const deleteBankController=(req,res) =>{

}

//Routes
//view - get method
server.get("/bank", listBankController);
//create - post method
server.post("/bank",creatBankController)
//update - put method
server.update("/bank",updateBankController)
//delete - delete method
server.delete("/bank",deleteBankController)



server.listen(1000,()=>console.log('server is ready'));