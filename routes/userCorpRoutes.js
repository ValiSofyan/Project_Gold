const routes = require ("express").Router()
const userCorpController = require("../controller/userCorpController")

routes.post("/reg1", userCorpController.inputDataCorp)

module.exports = routes