const routes = require ("express").Router()
const registerCorp = require("../../controller/corpManipulate/registerCorp")

routes.post("/regiscorp", registerCorp.registerCorp )

module.exports = routes