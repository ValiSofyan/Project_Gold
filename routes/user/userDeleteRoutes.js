const routes = require ("express").Router()
const usercon = require("../../controller/userManipulate/userDelete")

routes.delete("/userdelete", usercon.deleteUser )

module.exports = routes