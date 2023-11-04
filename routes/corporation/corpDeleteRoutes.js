const routes = require ("express").Router()
const usercon = require("../../controller/corpManipulate/deleteCorp")

routes.delete("/corpdelete", usercon.deleteCorp )

module.exports = routes