const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const req = require("express/lib/request");

const server = express();

//Middleware
server.use(bodyParser.json());

//DataBase

const banksDb = [];

//Bankmodel

class Bankmodel {
  constructor({ name, location, branch, phone, address, accountNumber }) {
    this.name = name;
    this.location = location;
    this.branch = branch;
    this.phone = phone;
    this.address = address;
    this.accountNumber = accountNumber;
  }
  save() {
    banksDb.push(this);
    return this;
  }

  static all() {
    return banksDb;
  }
    static update(updateInfo={}) {
      return banksDb;
    }
}

//Controllers
const listBankController = (req, res) => {
  const banks = Bankmodel.all();
  res.json({ data: banks });
};
const creatBankController = (req, res) => {
  const { name, location, branch, phone, address, accountNumber } = req.body;
  const bank = new Bankmodel({
    name,
    location,
    branch,
    phone,
    address,
    accountNumber,
  });
  bank.save();
  res.json({ message: "create Successful", data: bank });
};
const updateBankController = (req, res) => {
  const { name, location, branch, phone, address, accountNumber } = req.body;

  const updatedBank = Bankmodel.update({
    name,
    location,
    branch,
    phone,
    address,
    accountNumber,
  });

  res.json({message:"updated successful", data:updatedBank})
};
const deleteBankController = (req, res) => {};

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
