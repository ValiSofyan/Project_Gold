const dbUser = require("../db/userData.json")
const fs = require("fs")

class userController{
    static inputDataUser (req,res){
        try {
            let idDynamic;
            if (dbUser.length > 0) {
                idDynamic = dbUser[dbUser.length - 1].id + 1;
            } else {
                idDynamic = 1; 
            }

            const {userName,password,skill} = req.body
            if (!userName || !password || !skill) {
                throw new Error("Masukan yang benar"); 
            }
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
            res.status(400).json(error.message);
        } 

    }
}


module.exports = userController