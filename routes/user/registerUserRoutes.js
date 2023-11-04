const routes = require ("express").Router()
const registerUser = require("../../controller/userManipulate/registerUser")

routes.post("/regisUser", registerUser.registerUser )

module.exports = routes