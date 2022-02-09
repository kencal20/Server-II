const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const BanksSchema = new mongoose.Schema({
  name: String,
  location: String,
  branch: String,
  phone: String,
  address: String,
  accountNumber: String,
  accounts: [
    {
      accountId: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "Account",
      },
    },
  ],
});

const Bankmodel = mongoose.model("Bank", BanksSchema);

module.exports = Bankmodel;
