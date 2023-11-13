const router = require("express").Router();
const create = require("../controller/corpManipulate/corpCreateJob")
const deletecon = require("../controller/corpManipulate/deleteCorp")
const loginModel_2 = require("../controller/corpManipulate/loginCorp")
const registerCorp = require("../controller/corpManipulate/registerCorp")
const updatecon = require("../controller/corpManipulate/updateCorp")
const db = require("../db/db");


// corp
router.get("/login", (req, res) => {
    res.status(200).render("logincorp.ejs");
});

router.post("/logincorp", async (req, res) => {
    try {
        const user = await loginModel_2.loginCorp1(req, res);
        console.log("User login response:", user);
        const id=user
        if (user) {
            req.session.userId = id;
            const dataContents = await db("UserData").select("username", "skilldata_id");
            res.status(200).render("corpHome.ejs", { dataContents,id});
        }
    } catch (error) {
        console.error("Error in login route:", error);
        res.status(500).render('logincorp.ejs', { message: 'Internal server error', username: null });
    }
});


router.get("/signup", (req, res) => {
    res.status(200).render("registerCorp.ejs");
});
router.post("/registerCorp", async (req, res) => {
    try {
        const user = await registerCorp.registerCorp(req, res);
        console.log("User registration response:", user);
        if (user) {
            const dataContents = await db("UserData").select("username", "skilldata_id");
            res.status(200).render("corpHome.ejs", { dataContents });
        } else {
            res.status(401).render('registerCorp.ejs', { message: 'Registration failed', username: null });
        }
    } catch (error) {
        console.error("Error in registerCorp route:", error);
        res.status(500).render('registerCorp.ejs', { message: 'Internal server error', username: null });
    }
});

router.route('/create')
  .get(async (req, res) => {
    try {
      const dataContents = await db("SkillData").select("id", "skill");
      res.status(200).render("createJob.ejs", { dataContents });
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).send("Internal Server Error");
    }
  })

  .post(async (req, res) => {
    try {
        const dataContents = await db("SkillData").select("id", "skill");

        if (dataContents) {
            const user = await create.createJobListing(req, res);
            console.log(dataContents, "asdasd");

            res.status(200).render('createJob.ejs', { username: user, dataContents });
        } else {
            console.log("salaaah");
        }
    } catch (error) {
        console.error("Error in createJob route:", error);
        res.status(500).render('createJob.ejs', { message: 'Internal server error', username: null, dataContents: [] });
    }
});

router.get('/homecorp', async (req, res) => {
    try {
        const userId = req.session.userId;
        console.log(userId);
        if (!userId) {
            // Redirect to login if userId is not set
            return res.redirect('/login');
        }
        
        const dataContents = await db("UserData").select("username", "skilldata_id");
        console.log(dataContents.title);
        res.render('corpHome.ejs', { dataContents });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
});


router.patch("/corpupdate", updatecon.corpUpdate )
router.post("/corpcreate", create.createJobListing )


module.exports = router