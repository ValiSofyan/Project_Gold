const routes = require ("express").Router()
const usercon = require("../../controller/corpManipulate/corpCreateJob")

routes.post("/corpcreate", usercon.createJobListing )

module.exports = routes