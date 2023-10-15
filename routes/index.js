const express = require("express")
const routes = express.Router ()
const userRoutes = require("../routes/userRoutes")
const userCorpRoutes = require("../routes/userCorpRoutes")


routes.use("/user", userRoutes)
routes.use("/userCorp", userCorpRoutes)


module.exports = routes