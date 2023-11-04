const routes = require ("express").Router()
const loginModel = require("../../controller/userManipulate/loginUser")

routes.post("/loginuser", loginModel.loginUser  )

module.exports = routes