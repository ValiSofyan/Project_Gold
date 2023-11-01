const routes = require ("express").Router()
const loginModel = require("../../model/corpManipulate/loginCorp")

routes.post("/loginCorp", loginModel.loginCorp  )

module.exports = routes