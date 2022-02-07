
const Bankmodel = require("./module");
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

  res.json({ message: "updated successful", data: updatedBank });
};
const deleteBankController = (req, res) => {
  const { name } = req.body;
  const deletedBank = Bankmodel.delete({ name });
  res.json({ message: "bank deleted", data: deletedBank });
};

module.exports = {
  listBankController,
  creatBankController,
  updateBankController,
  deleteBankController,
};