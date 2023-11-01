const routes = require ("express").Router()
const usercon = require("../../model/corpManipulate/deleteCorp")

routes.delete("/corpdelete", usercon.deleteCorp )

module.exports = routes