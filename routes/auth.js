const express = require("express");
const { check, validationResult } = require("express-validator");

const router = express.Router();

const  auth  = require("../controllers/auth");

router.post("/login", loginfunc);

module.exports = router;


function loginfunc(req, res,next){
  console.log(req.body)
    auth
      .login(req, res)
  }