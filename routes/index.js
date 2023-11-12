const express = require("express")
const routes = express.Router ()
const user = require("./userRoutes")
const corp = require("./CorpRoutes")

routes.use("/user", user)
routes.use("/Corp", corp)




module.exports = routes