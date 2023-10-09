const express = require("express")
const routes = express.Router ()
const userRegister = require("../controller/userRegister")



routes.use("/user", userRegister)



module.exports = routes