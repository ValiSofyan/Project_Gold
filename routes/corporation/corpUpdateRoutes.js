const routes = require ("express").Router()
const update = require("../../model/corpManipulate/updateCorp")

routes.patch("/corpupdate", update.corpUpdate )

module.exports = routes