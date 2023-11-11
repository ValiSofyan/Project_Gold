const express = require('express');
const routes = require ("express").Router()
const usercon = require("../controller/corpManipulate/corpCreateJob")
const usercon1 = require("../controller/corpManipulate/deleteCorp")
const loginModel = require("../controller/corpManipulate/loginCorp")
const registerCorp = require("../controller/corpManipulate/registerCorp")
const update = require("../controller/corpManipulate/updateCorp")
const userCorpController = require("../controller/userCorpController")




// routes.post("/reg1", userCorpController.inputDataCorp)
routes.get("/corpcreateget", usercon.createJobListing )
routes.patch("/corpupdate", update.corpUpdate )
routes.post("/regiscorp", registerCorp.registerCorp)
routes.post("/loginCorp", loginModel.loginCorp1  )
routes.delete("/corpdelete", usercon1.deleteCorp )
routes.post("/corpcreate", usercon.createJobListing )

module.exports = routes