const Bankmodel = require("./module");
//Controllers
const listBankController = (req, res) => {
  //list banks
  const { id } = req.params;

  if (id) {
    Bankmodel.find({ _id: id })
      .then((banks) => {
        res.json({ data: banks });
      })
      .catch((err) => console.log(err));
  } else{
    Bankmodel.find()
    .then((banks) => {
      res.json({ data: banks });
    })
    .catch((err) => console.log(err));
  }
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
  bank
    .save()
    .then((result) => {
      res.json({ message: "create Successful", data: result });
    })
    .catch((error) => console.log(error));
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
}

//   res.json({ message: "updated successful", data: updatedBank });
// };
// const deleteBankController = (req, res) => {
//   const { name } = req.body;
//   const deletedBank = Bankmodel.delete({ name });
//   res.json({ message: "bank deleted", data: deletedBank });
// };

module.exports = {
  listBankController,
  creatBankController,
  updateBankController,
  // deleteBankController,
};
