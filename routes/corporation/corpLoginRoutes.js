const routes = require ("express").Router()
const loginModel = require("../../controller/corpManipulate/loginCorp")

routes.post("/loginCorp", loginModel.loginCorp1  )

module.exports = routes