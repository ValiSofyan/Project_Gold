const routes = require ("express").Router()
const registerCorp = require("../../model/corpManipulate/registerCorp")

routes.post("/regiscorp", registerCorp.registerCorp )

module.exports = routes