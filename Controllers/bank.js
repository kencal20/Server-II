const Bankmodel = require("../Models/bank");
const Account = require("../Models/account");
const { validationResult } = require("express-validator");
const req = require("express/lib/request");
const res = require("express/lib/response");

const listBankController = (req, res) => {
  //list banks
  const { id } = req.params;

  if (id) {
    Bankmodel.find({ _id: id })
      .then((banks) => {
        res.json({ data: banks });
      })
      .catch((err) => console.log(err));
  } else {
    Bankmodel.find()
      .then((banks) => {
        res.json({ data: banks });
      })
      .catch((err) => console.log(err));
  }
};

// Validation checks

const errors = validationResult(req);
if (!errors.isEmpty()) {
  console.log(errors);
  return res.json({message:"failed to create bank"})
  
}

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
  bank
    .save()
    .then((result) => {
      res.json({ message: "create Successful", data: result });
    })
    .catch((error) => console.log(error));
};
const updateBankController = (req, res) => {
  const { id, name, location, branch, phone, address, accountNumber } =
    req.body;

  Bankmodel.findById(id)
    .then((bank) => {
      if (bank) {
        bank.name = name;
        bank.location = location;
        bank.branch = branch;
        bank.phone = phone;
        bank.address = address;
        bank.accountNumber = accountNumber;

        bank.save();
        res.json({ message: "updated successful", data: bank });
      }
      res.json({ message: "Document cannot be found" });
    })
    .catch((err) => console.log(err));
};

const deleteBankController = (req, res) => {
  const { id } = req.body;
  Bankmodel.findByIdAndRemove(id).then((deletedBank) => {
    if (deletedBank) {
      AccountsModel.deleteMany({ bankId: deletedBank._id })
        .then((result) => {
          res.json({ message: "bank deleted", data: deletedBank });
        })
        .catch((err) => console.log(err));

      return;
    }
    res.json({ message: "bank not found" });
  });
};

module.exports = {
  listBankController,
  creatBankController,
  updateBankController,
  deleteBankController,
};