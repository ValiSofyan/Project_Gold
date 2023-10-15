const express = require("express");
const dbUser = require("../db/userData.json")
const app = express()
const fs = require("fs")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

class userController{
    static cekapi (req,res){
    try {
        let idDynamic;
        if (Array.isArray(dbUser) && dbUser.length > 0) {
            idDynamic = dbUser[dbUser.length - 1].id + 1;
        } else {
            idDynamic = 1; 
        }

        const {userName,password,skill} = req.body
        
        let tampData={
            id : idDynamic,
            userName,
            password,
            skill,
        }
        console.log(tampData);
        dbUser.push(tampData)
        let manipulateDataTampData = JSON.stringify(dbUser)
        
        fs.writeFileSync("./db/userData.json", manipulateDataTampData)
        res.status(201).json("SUCCESS to ADD")
        
        }catch (error) {
            console.error(error);
            res.status(500).json("Internal server error");
        } 
        controller/userController.js
        controller/userCorpController.js
        db/
        routes/userRoutes.js
        
    }
}

module.exports = userController