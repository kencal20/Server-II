const express = require("express");
const {
  listBankController,
  creatBankController,
  updateBankController,
  deleteBankController,
} = require("../Controllers/bank");
const router = express.Router();

// view - get method
router.get("/bank/:id?", listBankController);
//create - post method
router.post("/bank", creatBankController);
//update - put method
router.put("/bank", updateBankController);
// //delete - delete method
router.delete("/bank", deleteBankController);

module.exports = router;
