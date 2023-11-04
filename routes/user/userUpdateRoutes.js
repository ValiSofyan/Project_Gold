const routes = require ("express").Router()
const usercon = require("../../controller/userManipulate/userUpdate")

routes.patch("/userupdate", usercon.updateUser )

module.exports = routes