const routes = require ("express").Router()
const update = require("../../controller/corpManipulate/updateCorp")

routes.patch("/corpupdate", update.corpUpdate )

module.exports = routes