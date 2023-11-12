const express = require('express');
const routes = require("express").Router();
const create = require("../controller/corpManipulate/corpCreateJob")
const deletecon = require("../controller/corpManipulate/deleteCorp")
const loginModel_2 = require("../controller/corpManipulate/loginCorp")
const registerCorp = require("../controller/corpManipulate/registerCorp")
const updatecon = require("../controller/corpManipulate/updateCorp")


// corp
routes.get("/login", (req, res) => {
    res.status(200).render("logincorp.ejs");
});

routes.post("/logincorp", async (req, res) => {
    try {
        const user = await loginModel_2.loginCorp1(req, res);
        console.log("User login response:", user);
        
        if (user) {
            res.status(200).render('corpHome.ejs', { username: user.username });
        }
    } catch (error) {
        console.error("Error in login route:", error);
        res.status(500).render('logincorp.ejs', { message: 'Internal server error', username: null });
    }
});

routes.get("/signup", (req, res) => {
    res.status(200).render("registerCorp.ejs");
});
routes.post("/registerCorp", async (req, res) => {
    try {
        const user = await registerCorp.registerCorp(req, res);
        console.log("User registration response:", user);
        if (user) {
            res.status(200).render('corpHome.ejs', { username: user.username });
        } else {
            res.status(401).render('registerCorp.ejs', { message: 'Registration failed', username: null });
        }
    } catch (error) {
        console.error("Error in registerCorp route:", error);
        res.status(500).render('registerCorp.ejs', { message: 'Internal server error', username: null });
    }
});

routes.get("/corpcreateget", create.createJobListing )
routes.patch("/corpupdate", updatecon.corpUpdate )
// routes.post("/regiscorp", registerCorp.registerCorp)
// routes.post("/loginModel_2", logincon.loginCorp1  )
routes.delete("/corpdelete", deletecon.deleteCorp )
routes.post("/corpcreate", create.createJobListing )


module.exports = routes