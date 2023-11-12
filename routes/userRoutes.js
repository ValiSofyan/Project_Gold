const express = require("express");
const loginModel = require("../controller/userManipulate/loginUser");
const registerUser = require("../controller/userManipulate/registerUser");
const usercon = require("../controller/userManipulate/userUpdate");
const userDelete = require("../controller/userManipulate/userDelete");
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
        console.log(user)
        console.log("User login response:", user);

        if (user) {
            const dataContents = await db("joblisting").select("title", "description");
            res.status(200).render("userHome.ejs", { dataContents });
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
      const dataContents = await db("SkillData").select("id", "skill"); // Move this line here
      if (dataContents) {
        const user = await usercon.updateUser(req, res);
        console.log(user);
        res.status(200).render('profileuser.ejs', { username: user, dataContents });
      } else {
        console.log("salaaah");
      }
    } catch (error) {
      console.error("Error in profileuser route:", error);
      res.status(500).render('profileuser.ejs', { message: 'Internal server error', username: null, dataContents: [] });
    }
});

router.route('/delete')
.post(async (req, res) => {
    try {
        const dataContents = await db("SkillData").select("id", "skill");
        const user = await userDelete.deleteUser(req, res);
        console.log(user);
        res.status(200).render('profileuser.ejs', { username: user, dataContents });
    } catch (error) {
        console.error("Error in delete route:", error);
        res.status(500).render('profileuser.ejs', { message: 'Internal server error', username: null, dataContents: [] });
    }
});
router.get('/home', async (req, res) => {
    try {
        const dataContents = await db("joblisting").select("description", "skilldata_id", "title");
        console.log(dataContents);
        res.render('corpHome.ejs', { dataContents });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
});


router.delete("/userdelete", userDelete.deleteUser);
router.post("/crApply", apply.createApply);

module.exports = router;
