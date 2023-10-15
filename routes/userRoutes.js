const routes = require ("express").Router()
const userController = require("../controller/userController")

routes.post("/reg", userController.cekapi)

module.exports = routes