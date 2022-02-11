const AccountsModel = require("../Models/account");
const createAccountController = (req, res) => {
  const { name, number, accountType, bankId } = req.body;

  const account = new AccountsModel({ name, number, accountType, bankId });

  account.save().then((result) => {
    if (result) res.json({ message: "Account Created", data: result });
    else res.json({ message: "failed to create account" });
  });
};
const listAccountController = (req, res) => {
  AccountsModel.find()
    .populate("bankId", "name location branch")
    .then((accounts) => {
      res.json({ data: accounts });
    })
    .catch((err) => console.log(err));
};
module.exports = {
  createAccountController,
  listAccountController,
};
