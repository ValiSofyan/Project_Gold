const routes = require("express").Router();
const loginModel = require("../controller/userManipulate/loginUser");
const registerUser = require("../controller/userManipulate/registerUser");
const apply = require("../controller/userManipulate/userAplican");
const usercon = require("../controller/userManipulate/userUpdate");
const usercon1 = require("../controller/userManipulate/userDelete");

routes.post("/loginuser", async (req, res) => {
    try {
        await loginModel.loginUser(req, res);
    } catch (error) {
        console.error("Error in login route:", error);
        res.status(500).render('error', { message: 'Internal server error' });
    }
}); 

routes.delete("/userdelete", usercon1.deleteUser);
routes.patch("/userupdate", usercon.updateUser);
routes.post("/crApply", apply.createApply);
routes.post("/regisUser", registerUser.registerUser);
// routes.post("/loginuser", loginModel.loginUser);

module.exports = routes;
