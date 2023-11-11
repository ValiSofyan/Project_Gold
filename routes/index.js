const express = require("express")
const routes = express.Router ()
// const userRoutes = require("../routes/userRoutes")
// const userCorpRoutes = require("./corporation/userCorpRoutes")

//DECLARE PATH OF USER
// const regisUser = require("./user/registerUserRoutes")
const user = require("./userRoutes")
// const userupdate = require("./user/userUpdateRoutes")
// const userdelete  = require("./user/userDeleteRoutes")
// const userapply  = require("./user/userCreateRoutes")


//Declare PATH OF CORPORATION
const regisCorp = require("./CorpRoutes")
// const loginCorp = require("./CorpRoutes")
// const usercorpupdate = require("./CorpRoutes")
// const corpdelete = require("./CorpRoutes")
// const corpCreateJob = require("./CorpRoutes")

//==========================================================================================================

//USER MANIPULATION
routes.use("/user", user)
//CORP MANIPULATION
routes.use("/Corp", regisCorp)




module.exports = routes