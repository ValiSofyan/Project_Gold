const routes = require ("express").Router()
const usercon = require("../../model/userManipulate/userUpdate")

routes.patch("/userupdate", usercon.updateUser )

module.exports = routes