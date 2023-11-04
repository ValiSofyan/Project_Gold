const express = require("express")
const routes = express.Router ()
const userRoutes = require("../routes/userRoutes")
const userCorpRoutes = require("./corporation/userCorpRoutes")

//DECLARE PATH OF USER
const regisUser = require("./user/registerUserRoutes")
const loginUser = require("./user/loginUserRoutes")
const userupdate = require("./user/userUpdateRoutes")
const userdelete  = require("./user/userDeleteRoutes")
const userapply  = require("./user/userCreateRoutes")


//Declare PATH OF CORPORATION
const regisCorp = require("./corporation/corpRegisterRoutes")
const loginCorp = require("./corporation/corpLoginRoutes")
const usercorpupdate = require("./corporation/corpUpdateRoutes")
const corpdelete = require("./corporation/corpDeleteRoutes")
const corpCreateJob = require("./corporation/corpCreateJob")

//==========================================================================================================




//USER MANIPULATION
routes.use("/user", userRoutes)
routes.use("/regis", regisUser)
routes.use("/login", loginUser)
routes.use("/update", userupdate)
routes.use("/delete", userdelete)
routes.use("/apply", userapply)


//CORP MANIPULATION
routes.use("/userCorp", userCorpRoutes)
routes.use("/regis", regisCorp)
routes.use("/login", loginCorp)
routes.use("/update", usercorpupdate)
routes.use("/delete", corpdelete)
routes.use("/jobC", corpCreateJob)



module.exports = routes