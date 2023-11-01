const routes = require ("express").Router()
const registerUser = require("../../model/userManipulate/registerUser")

routes.post("/regisUser", registerUser.registerUser )

module.exports = routes