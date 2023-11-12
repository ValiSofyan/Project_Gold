const express = require("express");
const loginModel = require("../controller/userManipulate/loginUser");
const registerUser = require("../controller/userManipulate/registerUser");
const usercon = require("../controller/userManipulate/userUpdate");
const usercon1 = require("../controller/userManipulate/userDelete");
const apply = require("../controller/userManipulate/userAplican");
const db = require("../db/db");

const router = express.Router();

// Login route
router.get("/login", (req, res) => {
    res.status(200).render("loginuser.ejs");
});

router.post("/loginuser", async (req, res) => {
    try {
        const user = await loginModel.loginUser(req, res);
        console.log("User login response:", user);
        
        if (user) {
            console.log(user.id);
            res.status(200).render('userHome.ejs', { user_id: user.id });
        } else {
            res.status(401).render('logincorp.ejs', { error: "Login failed", username: null });
        }
    } catch (error) {
        console.error("Error in login route:", error);
        res.status(500).render('logincorp.ejs', { error: 'Internal server error', username: null });
    }
});

// Signup route
router.get("/signup", (req, res) => {
    res.status(200).render("registerUser.ejs");
});

router.post("/registerUser", async (req, res) => {
    try {
        const user = await registerUser.registerUser(req, res);
        console.log("User registration response:", user);
        res.status(200).render('userHome.ejs', { username: user.id });
        if (user) {
            res.status(200).render('userHome.ejs', { username: user.username });
        } else {
            res.status(401).render('registerUser.ejs', { message: 'Registration failed', username: null });
        }
    } catch (error) {
        console.error("Error in registerUser route:", error);
        res.status(500).render('registerUser.ejs', { message: 'Internal server error', username: null });
    }
});


router.route('/update')
  .get(async (req, res) => {
    try {
      const dataContents = await db("SkillData").select("id", "skill");
      res.status(200).render("profileuser.ejs", { dataContents });
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).send("Internal Server Error");
    }
  })
  .post(async (req, res) => {
        
        try {
            if (dataContents) {
                const user = await usercon.updateUser(req, res);
                const dataContents = await db("SkillData").select("id", "skill");
        
                res.status(200).render('profileuser.ejs', { username: user, dataContents });
            } else {
                // Render an error page with a specific message when dataContents is falsy
                console.log("salaaah");
            }
        } catch (error) {
            console.error("Error in profileuser route:", error);
            res.status(500).render('profileuser.ejs', { message: 'Internal server error', username: null, dataContents: [] });
        }
    
    });





router.delete("/userdelete", usercon1.deleteUser);
router.post("/crApply", apply.createApply);

module.exports = router;
