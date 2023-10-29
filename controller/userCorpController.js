const dbUserCorp = require("../db/userCorpData.json")
const fs = require("fs")


class userCorpController{
    static inputDataCorp (req,res){
        try {
            let idDynamic;
            if (dbUserCorp.length > 0) {
                 idDynamic = dbUserCorp[dbUserCorp.length - 1].id + 1;
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
            dbUserCorp.push(tampData)
            let manipulateDataTampData = JSON.stringify(dbUserCorp)
        
            fs.writeFileSync("./db/userCorpData.json", manipulateDataTampData)
            res.status(201).json("SUCCESS to ADD")
        
        }catch (error) {
            console.error(error);
            res.status(400).json(error.message);
         } 
      

    }
}

module.exports = userCorpController