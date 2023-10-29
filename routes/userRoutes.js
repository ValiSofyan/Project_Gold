const routes = require ("express").Router()
const userController = require("../controller/userController")

routes.post("/reg", userController.inputDataUser)

module.exports = routes