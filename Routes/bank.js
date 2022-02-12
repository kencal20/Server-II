const express = require("express");
const {
  listBankController,
  creatBankController,
  updateBankController,
  deleteBankController,
} = require("../Controllers/bank");
const {body} = require("express-validator");
const router = express.Router();

// view - get method
router.get("/bank/:id?", listBankController);
//create - post method
router.post("/bank",body('name').trim().not().isEmpty(), creatBankController);
//update - put method
router.put("/bank", updateBankController);
// //delete - delete method
router.delete("/bank", deleteBankController);

module.exports = router;
