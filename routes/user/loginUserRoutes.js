const routes = require ("express").Router()
const loginModel = require("../../model/userManipulate/loginUser")

routes.post("/loginuser", loginModel.loginUser  )

module.exports = routes