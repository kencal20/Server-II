const express = require("express");
const {
  listAccountController,
  createAccountController
  
} = require("../Controllers/account");
const router = express.Router();

router.post("/account", createAccountController);

router.get("/account", listAccountController);

module.exports = router;