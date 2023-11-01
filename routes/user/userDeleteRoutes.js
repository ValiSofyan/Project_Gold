const routes = require ("express").Router()
const usercon = require("../../model/userManipulate/userDelete")

routes.delete("/userdelete", usercon.deleteUser )

module.exports = routes