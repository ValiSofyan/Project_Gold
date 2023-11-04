const routes = require ("express").Router()
const apply = require("../../controller/userManipulate/userAplican")

routes.post("/crApply", apply.createApply )

module.exports = routes