const express = require("express");
const dbUserCorp = require("../db/userCorpData.json")
const app = express()
const fs = require("fs")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

class userCorpController{
    static cekapi1 (req,res){
    try {
        let idDynamic;
        if (dbUserCorp.length > 0) {
            idDynamic = dbUserCorp[dbUserCorp.length - 1].id + 1;
        } else {
            idDynamic = 1; 
        }

        const {userName,password,skill} = req.body
         if (!userName || !password || !skill) {
            res.status(400).json("Masukan yang benar");
            return; 
          }

        let tampData={
            id : idDynamic,
            userName,
            password,
            skill,
        }
        console.log(tampData);
        dbUserCorp.push(tampData)
        let manipulateDataTampData = JSON.stringify(dbUserCorp)
        
        fs.writeFileSync("./db/userCorpData.json", manipulateDataTampData)
        res.status(201).json("SUCCESS to ADD")
        
        }catch (error) {
            console.error(error);
            res.status(500).json(error.message);
        } 
      

    }
}

module.exports = userCorpController