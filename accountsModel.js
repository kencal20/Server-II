const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Acoount", AccountSchema);
